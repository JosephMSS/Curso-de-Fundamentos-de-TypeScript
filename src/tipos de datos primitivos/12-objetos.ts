(() => {
  const login = (credentials: { email: string; password: string }) => {
    console.log(credentials.email, credentials.password);
  };
  const email = "joseph@amil.com";
  const password = "12bhubvg1u2g31";
  login({ email, password });
  type Sizes = "M" | "S" | "L" | "XL";
  const products: any[] = [];
  const addProduct = (product: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(product);
    console.log("🚀 ~ file: 12-objetos.ts:17 ~ products", products);
  };
  addProduct({ title: "P1", createdAt: new Date(), stock: 12 });
})();
