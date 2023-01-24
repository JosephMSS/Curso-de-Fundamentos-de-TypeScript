(() => {
  /**
   *
   ** De esta manera especificamos que estamos enviando un
   ** numero en la función
   * @returns
   */
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((price) => (total += price));
    return total;
  };
  /**
   * Funcion sin retorno
   *
   */
  const printTotal = (prices: number[]): void => {
    const t = calcTotal(prices);
    console.log("🚀 ~ file: 11-ReturnFunctions.ts:19 ~ t", t);
  };
})();
