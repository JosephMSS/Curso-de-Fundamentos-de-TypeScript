(() => {
  /**
   * TS es capaz de saber el tipo
   * de dato sin que se lo
   * indiquemos
   */
  /**
   * Se puede utilizar el motor de inferencia en la
   * medida de lo posible, otros casos es mejor
   * indicarlos explícitamente
   */
  let myProductName = "Product";
  let myProductPrice = 5000;
  /**
   * El hecho de que este tipado nos permite
   * tener un mayor autocompletado
   */
  /**
   * En el caso de constantes indica
   * directamente su valor, ya no
   * aparece como un tipo en la
   * previsualización
   */
  const myProductStock = 100;
})();
