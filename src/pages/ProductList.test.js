import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProductList from './ProductList';
import useProducts from '../hooks/useProducts';  // Assuming useProducts fetches data from db.json

jest.mock('../hooks/useProducts');  // Mocking the useProducts hook for error/loading cases

describe('ProductList Component', () => {
  it('renders loading state', () => {
    // Mocking the loading state of the hook
    useProducts.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(<ProductList />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('renders error message if fetching products fails', () => {
    // Mocking an error state
    useProducts.mockReturnValue({
      data: null,
      isLoading: false,
      error: { message: 'Error fetching products' },
    });

    render(<ProductList />);

    expect(screen.getByText(/Error fetching products/i)).toBeInTheDocument();
  });

  it('renders products correctly', async () => {
    // Let the hook use the actual data (db.json or API)
    useProducts.mockReturnValue({
      data: null,  // Mocking null data here so that it doesn't override the actual data
      isLoading: false,
      error: null,
    });

    render(<ProductList />);

    // Wait for actual product data to render
    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('Product 2')).toBeInTheDocument();
    });
  });

  it('filters products by category', async () => {
    render(<ProductList />);

    const categorySelect = screen.getByLabelText(/Category:/i);
    fireEvent.change(categorySelect, { target: { value: 'electronics' } });

    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
    });
  });

  it('filters products by price range', async () => {
    render(<ProductList />);

    const priceRangeInputMin = screen.getByLabelText(/Price Range:/i).nextSibling;
    const priceRangeInputMax = priceRangeInputMin.nextSibling;

    // Set new price range
    fireEvent.change(priceRangeInputMin, { target: { value: '100' } });
    fireEvent.change(priceRangeInputMax, { target: { value: '200' } });

    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
    });
  });

  it('handles product rating correctly', async () => {
    render(<ProductList />);

    const starIcons = screen.getAllByRole('button', { name: /star/i });

    // Simulate rating click for product 1 (rating 4 stars)
    fireEvent.click(starIcons[0]);
    fireEvent.click(starIcons[1]);
    fireEvent.click(starIcons[2]);
    fireEvent.click(starIcons[3]);

    await waitFor(() => {
      expect(starIcons[0]).toHaveClass('fill-current');
      expect(starIcons[1]).toHaveClass('fill-current');
      expect(starIcons[2]).toHaveClass('fill-current');
      expect(starIcons[3]).toHaveClass('fill-current');
    });
  });
});
