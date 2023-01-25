import { Product } from "./product.model";

export let products: Product[] = [];
export const addProduct = (product: Product) => {
  // product.id='ASDasd'
  products.push(product);
};
