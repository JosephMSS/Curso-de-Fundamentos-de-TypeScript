import { BaseModel } from "../base.model";
import { Product } from "./product.model";

export let products: Product[] = [];
export const addProduct = (product: Product) => {
  // product.id='ASDasd'
  products.push(product);
};
export const updateProduct = (id: string, product: Product) => {};
export const deleteProduct = (id: string) => {};
export const findProduct = () => {};
export const findOneProduct = (id: string) => {};
