import { Product, SIZES } from "./products/product.model";
import { addProduct } from "./products/product.service";
const product: Product = {
  id: 1,
  title: "test product",
  stock: 0,
  sizes: SIZES.L,
  createdAt: new Date(),
  updatedAt: new Date(),
  category: {
    id: 1,
    name: "test category",
    updatedAt: new Date(),
    createdAt: new Date(),
  },
};
