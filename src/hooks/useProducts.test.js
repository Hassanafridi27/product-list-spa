import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import { useProducts } from './useProducts'; // Adjust the path to your hook

// Mock Axios
jest.mock('axios');

// QueryClient initialization function
const createQueryClient = () => new QueryClient({ defaultOptions: { queries: { retry: false } } });

const HookTestComponent = ({ callback }) => {
  const result = callback();
  return <div data-testid="result">{JSON.stringify(result)}</div>;
};

describe('useProducts hook', () => {
  it('should fetch and return products data using axios', async () => {
    axios.get.mockResolvedValueOnce({
      data: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ],
    });

    const queryClient = createQueryClient();

    let container;
    await act(async () => {
      container = render(
        <QueryClientProvider client={queryClient}>
          <HookTestComponent callback={useProducts} />
        </QueryClientProvider>
      );
    });

    const result = JSON.parse(container.getByTestId('result').textContent);
    expect(result.isSuccess).toBe(true);
    expect(result.data).toEqual([
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ]);
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/products');
  });

  it('should handle API errors correctly', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    const queryClient = createQueryClient();

    let container;
    await act(async () => {
      container = render(
        <QueryClientProvider client={queryClient}>
          <HookTestComponent callback={useProducts} />
        </QueryClientProvider>
      );
    });

    const result = JSON.parse(container.getByTestId('result').textContent);
    expect(result.isError).toBe(true);
    expect(result.error).toBeDefined();
    expect(result.error.message).toBe('Network Error');
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/products');
  });
});
