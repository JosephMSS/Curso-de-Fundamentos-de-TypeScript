/**
 * las tuplas son array fuertemente tipados,
 * donde podemos tipar las posiciones y
 * el numero de elementos que podemos
 * tener
 */
/**
 * Aquí no importa el orden de los tipos de datos,
 * ni la cantidad, siguen siendo validos
 */
const ageList: (string | number)[] = [12, "we", 12];
let user: [string, number, boolean];
user = ["Joseph", 23, true];
const [username, age] = user;
console.log("🚀 ~ file: 02-tuplas.ts:15 ~ username", username);
/**
 * Unicamente si insertamos el tipado va a fallar,
 * pero si hacemos las asignaciones manuales no
 * a a haber problema
 */
user.push("a");
console.log("🚀 ~ file: 02-tuplas.ts:15 ~ user", user);
