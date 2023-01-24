(() => {
  /**
   * No podemos definir un undefined o null una variable tipada
   *  */
  let myNumber: number;
  let myString: string;
  /**
   * En este caso serias de tipo Any
   */
  let myUndefined = undefined;
  let myNull = null;

  /**
   * O podríamos tiparlo
   * En este caso no se podría asignar otro tipo de variable
   *  */
  let myNumberUndefined: undefined = undefined;
  let myStringNull: null = null;

  /**
   * En caso de necesitar que una variable se inicialice
   * en null y después se quiera cambiar el valor  se
   * puede hacer de a siguiente manera
   */
  let dynamicNull: number | null = null;
  dynamicNull = 1;

  //hi functions
  function hi(name: string | null) {
    let hello = "hola";
    if (name) {
      return `${hello} ${name}`;
    }
    return `${hello} nobody`;
  }
  function hiV2(name: string | null) {
    let hello = "hola";
    /**
     * este signo de pregunta es par
     * validar si la función existe, de lo contrario retorna nulo
     *  */
    hello += name?.toLocaleLowerCase() || "";
    return hello;
  }
  console.log(hi("Joseph"));
  console.log(hi(null));
})();
