(() => {
  let productPrice = 1000;
  productPrice = 2000;
  console.log("🚀 ~ file: 02-numbers.ts:4 ~ productPrice", productPrice);
  /**
   * Forma explicita
   */
  let customerAge: number = 12;
  customerAge += 1;
  console.log("🚀 ~ file: 02-numbers.ts:10 ~ customerAge", customerAge);
  /**
   * En el caso de que se quiera declarar
   * una variable sin asignar el valor,
   * debemos indicar su tipo
   */
  let productInStock: number;
  //   console.log("🚀 ~ file: 02-numbers.ts:19 ~ productInStock", productInStock); //EN este caso me indica que la variable esta sin inicializa r
  productInStock = 12;
  let discount = parseInt("1");
  console.log("🚀 ~ file: 02-numbers.ts:20 ~ discount", discount);
  const numbers = 2;
  console.log("🚀 ~ file: 02-numbers.ts:22 ~ numbers", numbers);
  /**
   * En caso de que se haga el tipado,
   * este debe ser en minúscula,
   * de lo contrario no haríamos
   * referencia al tipo,
   * sino a la clase
   */
  // let maxProduct:Number=1
  let maxProduct: number = 1;
})();
