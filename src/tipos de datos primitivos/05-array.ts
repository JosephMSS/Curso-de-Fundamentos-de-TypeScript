(() => {
  let prices = [1, 2, 3];

  //   prices.push("12");// da error ya que el array es de strings
  let pricesAny = [1, 2, 3, "12", true, false];
  let pricesList: (string | boolean)[];
  /**
   * Al declarar array de objetos de esta manera,
   * e incluso se podrán insertar arrarys
   */
  let pricesObject: object[];
  /**
   * En el caso de funciones especiales, nos detectara el error
   * si la operación que vamos a ejecutar es permitida
   */
  //   const numberListError = [1, 2, true,  
  const numberList = [1, 2, 3];
  const numberListMap = numberList.map((number) => {
    return number + 1;
  });
  console.log(
    "🚀 ~ file: 05-array.ts:20 ~ numberListMap ~ numberListMap",
    numberListMap
  );
})();
