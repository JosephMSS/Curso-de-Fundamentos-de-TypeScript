type Product = {
  id: string | number;
  stock?: number;
  isNew?: boolean;
};
export const createProduct = (product: Product): Product => {
  /**
   * Usamos ?? ya que corrige los problemas
   * que tiene || ya qu este toma valores
   * como:
   * false===false
   * 0===false
   * ''===false
   * POr lo que si mandamos un 0 en stock no retornara 10
   * y en caso de que is new sea false, retornara true
   */
  return {
    id: product.id,
    stock: product.stock ?? 10,
    isNew: product.isNew ?? true,
  };
};
const product: Product = createProduct({ id: 12 });
console.log("🚀 ~ file: 05-ParametrosOpcionales.ts:24 ~ product", product)
