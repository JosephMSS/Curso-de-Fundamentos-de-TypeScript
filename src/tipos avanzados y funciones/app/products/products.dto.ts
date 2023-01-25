import { Product } from "./product.model";
/**
 * Crea un interfaz excluyendo datos seleccionados
 */
export interface CreateProductDto
  extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
  categoryId: string | number;
}
/**
 * Crea una interfaz a partir de los campos seleccionados
 */
export type IdDto = Pick<Product, "id">;
