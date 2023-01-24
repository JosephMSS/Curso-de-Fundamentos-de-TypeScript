(() => {
  /**
   * Alias type , este se genera con la palabra reservada type y el signo de igual
   */
  type UserID = string | number | boolean;
  let userId: UserID;
  function greeting(userId: UserID) {
    if (typeof userId === "string") {
      userId.toLocaleLowerCase();
    }
    if (typeof userId === "number") {
      userId.toFixed();
    }
  }

  /**
   * Literal types
   *
   */
  type Sizes = "S" | "M" | "L" | "XL";
  let shirtSize: Sizes;
  shirtSize = "M";
  shirtSize = "L";
  shirtSize = "XL";
  /**
//  * Da error ya queno esta en el conjunto de valores asignables
 */
  //   shirtSize = "adadsfasdf";
})();
