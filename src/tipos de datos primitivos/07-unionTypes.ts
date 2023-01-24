(() => {
  /**
   * Para este tipo de variable
   * no se puede usar la inferencia
   */
  let userId: string | number;
  userId = 1;
  userId = "uuid12345";
  function greeting(myText: string | number) {
    /**
     * El autocompletado funciona una vez que 
     * validemos el typo de variable
     */
    if (typeof myText === "string") {
      myText.toLocaleLowerCase();
    }
    if (typeof myText === "number") {
      myText.toFixed();
    }
  }
  greeting(1);
  greeting("uuid12345");
})();
