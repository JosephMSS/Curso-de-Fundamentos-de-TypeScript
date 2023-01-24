(() => {
  /**
   * se le pude asignar cualquier valor
   * se aconseja no ser utiliza
   * únicamente se puede usar cuando
   * no sabemos que tipo de dato puede venir,
   * este mayoritariamente se usa cuando se
   * esta migrando el proyecto a ts
   */
  /**
   * Puede ser usada en  librerías que no están tipadas
   */
  let myDynamicVar: any;
  myDynamicVar = 1;
  myDynamicVar = true;
  myDynamicVar = "string";
  myDynamicVar = {};
  myDynamicVar = "string1";
  /**
   * En  este caso las ayudas del IDE no funcionan,
   * para habilitarlas podría hacer un cast
   */
  const rta = (myDynamicVar as string).toLocaleUpperCase();
  console.log("🚀 ~ file: 06-any.ts:24 ~ rta", rta);

  myDynamicVar = 1;
  const rta1 = (<number>myDynamicVar).toFixed();

  
})();
