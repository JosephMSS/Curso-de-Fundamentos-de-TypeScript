import { addProduct, calcStock, products } from "./product.service";
import { Product } from "./products.module";

const product1: Product = { title: "P1", createdAt: new Date(), stock: 12 };
const product2: Product = {
  title: "P2",
  createdAt: new Date(),
  stock: 12,
};
addProduct(product1);
addProduct(product2);
const total = calcStock();
console.log("🚀 ~ file: main.ts:13 ~ total", total);
