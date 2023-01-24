(() => {
  type Sizes = "M" | "S" | "L" | "XL";
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };
  const products: Product[] = [];
  const addProduct = (product: Product) => {
    products.push(product);
  };
  const product1: Product = { title: "P1", createdAt: new Date(), stock: 12 };
  addProduct(product1);
})();
