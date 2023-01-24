/**
 * Son funciones en donde sin son llamadas no van
 * a  finalizar
 */
const ciclo = () => {
  while (true) {
    console.log("Wenas");
  }
};
/**
 * Lo mismo sucede cuando se lanza un error,
 * este finaliza la ejecución
 */
const fail = (message: string) => {
  throw new Error(message);
};
const example = (input: unknown) => {
  const isString = typeof input === "string";
  const isArray = Array.isArray(input);
  if (isString) {
    return "is string";
  }
  if (isArray) {
    return "is array";
  }
  return fail("desconocido");
};
example("hello");
example([1, 5, 7]);
example(5555);
example("No  se ve ☠️");
