import { Product, SIZES } from "./products/product.model";
import { addProduct,products} from "./products/product.service";
import { faker } from "@faker-js/faker";
import { Category } from "./categories/category.model";
import { BaseModel } from "./base.model";

for (let i = 0; i < 50; i++) {
  const baseModel = (): BaseModel => {
    return {
      id: faker.datatype.uuid(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.future(),
    };
  };
  const category: Category = {
    ...baseModel(),
    name: faker.commerce.department(),
  };
  const product: Product = {
    ...baseModel(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.food(),
    color: faker.color.human(),
    price: +faker.commerce.price(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    stock: faker.datatype.number(),
    sizes: faker.helpers.arrayElement([SIZES.L, SIZES.M, SIZES.S, SIZES.XL]),
    category,
  };
  addProduct(product);
}
console.log("🚀 ~ file: main.ts:35 ~ products", products)
