(() => {
  type Sizes = "S" | "M" | "L" | "XL";
  /**
   * el unico objeto que podemos usar como tipo es el Date
   */
  const createProductItem = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      size,
    };
  };
  const producto1 = createProductItem("P1", new Date(), 12, "XL");
  const productoV2 = createProductItem("P1", new Date(), 12);
  console.log("🚀 ~ file: 10-funciones.ts:20 ~ producto1", productoV2.size);
})();
