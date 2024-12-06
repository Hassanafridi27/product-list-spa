import { createServer } from "miragejs";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api";

      this.get("/products", () => {
        return [
          { id: 1, name: "Product A", category: "Electronics", price: 299 },
          { id: 2, name: "Product B", category: "Books", price: 19 },
          { id: 3, name: "Product C", category: "Clothing", price: 49 },
        ];
      });
    },
  });
}
