import { Product } from "./products.module";
export const products: Product[] = [];
export const addProduct = (product: Product) => {
  products.push(product);
};
export const calcStock = (): number => {
  let total = 0;
  products.forEach((product) => {
    total += product.stock;
  });
  return total;
};
