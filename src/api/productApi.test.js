import axios from "axios";
import { fetchProducts } from "./productApi";

jest.mock("axios"); // Mock Axios

describe("fetchProducts", () => {
  it("should fetch and return products", async () => {
    // Mock successful response
    const mockData = { data: [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }] };
    axios.get.mockResolvedValueOnce(mockData);

    const result = await fetchProducts();
    expect(result).toEqual(mockData.data); // Assert data matches
    expect(axios.get).toHaveBeenCalledWith("/api/products"); // Assert correct API endpoint
  });

  it("should throw an error if the API call fails", async () => {
    // Mock error
    const mockError = new Error("Network Error");
    axios.get.mockRejectedValueOnce(mockError);

    await expect(fetchProducts()).rejects.toThrow("Network Error"); // Assert error is thrown
    expect(axios.get).toHaveBeenCalledWith("/api/products"); // Assert correct API endpoint
  });
});
