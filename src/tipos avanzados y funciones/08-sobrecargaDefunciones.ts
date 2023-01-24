/**
 * Una función que reciba un nombre y retorne un array de string
 * Y si envio un array  de texto , este debe retornar un string
 */
/**
 * Solo funciona en este tipo de funciones
 */
function parseString(input: string | string[]): string | string[] {
  const isArray = Array.isArray(input);
  if (isArray) {
    return input.join();
  }
  return input.split("");
}
const rtaArray = parseString("Nico");
const rtaString = parseString(["N", "i", "c", "o"]);
console.log("🚀 ~ file: 08-sobrecargaDefunciones.ts:17 ~ rtaString", rtaString);
console.log("🚀 ~ file: 08-sobrecargaDefunciones.ts:16 ~ rtaArray", rtaArray);
