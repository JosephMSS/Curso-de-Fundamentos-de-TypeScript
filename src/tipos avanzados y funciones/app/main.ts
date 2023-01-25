import { Product, SIZES } from "./products/product.model";
import { addProduct, products } from "./products/product.service";
import { faker } from "@faker-js/faker";
import { Category } from "./categories/category.model";
import { BaseModel } from "./base.model";
import { CreateProductDto } from "./products/products.dto";

for (let i = 0; i < 50; i++) {
  
  const product: CreateProductDto = {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.food(),
    color: faker.color.human(),
    price: +faker.commerce.price(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    stock: faker.datatype.number(),
    sizes: faker.helpers.arrayElement([SIZES.L, SIZES.M, SIZES.S, SIZES.XL]),
    categoryId: category.id,
  };
  addProduct(product);
}
console.log("🚀 ~ file: main.ts:35 ~ products", products);
