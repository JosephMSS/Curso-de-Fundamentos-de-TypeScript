(() => {
  /**
   * En caso de no definir el scope, si repito el
   * nombre de las variables de otro documento,
   * me va a señalar un error, por esto
   * momentáneamente vamos a encerrar el
   * código en una función anónima auto ejecutada
   */
  let myProductName = "Product";
  let myProductPrice = 5000;
  const myProductStock = 100;
})();