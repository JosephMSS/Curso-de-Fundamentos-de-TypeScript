import { Category } from "../categories/category.model";

export enum SIZES {
  M = "M",
  S = "S",
  L = "L",
  XL = "XL",
}
export type Sizes = "M" | "S" | "L" | "XL";
export interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  sizes: SIZES;
  category: Category;
}
