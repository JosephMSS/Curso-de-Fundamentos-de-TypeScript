import { Category } from "../categories/category.model";
import { BaseModel } from "../base.model";
export enum SIZES {
  M = "M",
  S = "S",
  L = "L",
  XL = "XL",
}
export type Sizes = "M" | "S" | "L" | "XL";
export interface Product extends BaseModel {
  title: string;
  stock: number;
  sizes: SIZES;
  category: Category;
}
