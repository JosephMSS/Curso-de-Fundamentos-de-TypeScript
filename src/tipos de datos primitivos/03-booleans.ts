(() => {
  /**
   * Inferido
   *  */
  let isEnabled = false;
  /**
   * Implícito, debe ser tipado en minúscula
   *  */
  let isNew: boolean;
  isNew = true;
  let random = Math.random();
  /**
   * en este caso falla, ya que,
   * retorna un string a un 
   * booleano
   */
  //   const isValid = random >= 0.5? 'true' : 'false';
  const isValid = random >= 0.5;
  console.log("🚀 ~ file: 03-booleans.ts:13 ~ isValid", isValid);
})();
