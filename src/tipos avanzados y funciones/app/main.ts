import { Product, SIZES } from "./products/product.model";
import { addProduct } from "./products/product.service";
const product: Product = {
  id: 1,
  title: "test product",
  createdAt: new Date(),
  stock: 0,
  sizes: SIZES.L,
};
