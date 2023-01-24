//Definicion de tipos se hacen en la capa de modelos
export type Sizes = "M" | "S" | "L" | "XL";
export type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};
