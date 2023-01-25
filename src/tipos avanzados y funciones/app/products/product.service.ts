import { faker } from "@faker-js/faker";
import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";
import { Product } from "./product.model";
import { CreateProductDto, IdDto } from "./products.dto";

export let products: Product[] = [];
const baseModel = (): BaseModel => {
  return {
    id: faker.datatype.uuid(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.future(),
  };
};
const category = (): Category => {
  return {
    ...baseModel(),
    name: faker.commerce.department(),
  };
};

export const addProduct = (product: CreateProductDto): Product => {
  const newProduct: Product = {
    ...product,
    ...baseModel(),
    category: category(),
  };
  products.push(newProduct);
  return newProduct;
};
export const updateProduct = (id: IdDto, product: Product) => {};
export const deleteProduct = (id: IdDto) => {};
export const findProduct = () => {};
export const findOneProduct = (id: IdDto) => {};
