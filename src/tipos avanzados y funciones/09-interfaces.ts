type Sizes = "M" | "S" | "L" | "XL";
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  sizes: Sizes;
}
const product: Product[] = [];
product.push({
  id: 1,
  title: "test product",
  createdAt: new Date(),
  stock: 0,
  sizes: "L",
});
/**
 * Las interfaces funcionan igual que tipo:
 * Type: Definimos tipos primitivos y directos
 * Interface:
 * *necesite un cuerpo completo,
 * *se usa para un conjunto de valores.
 * IMPORTANT:Las interfaces se pueden extender a diferencia de los tipos
 */
