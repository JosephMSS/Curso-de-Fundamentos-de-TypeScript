/**
 * any lo desactiva el análisis de
 * código estático casi por completo
 */
let anyVar: any;
anyVar = true;
anyVar = "q";
anyVar = [];
anyVar = {};
/**
 * aquí tenemos un error
 * ya que se esta
 * asignando un
 * objeto a un
 * booleano
 */
let isNew: boolean = anyVar;
/**
 * ademas pierde contexto y no verifica si posee las propiedades o no
 */
anyVar.create();
/**
 * con unknown, tenemos que validar primero
 * el tipo de dato y a partir de ahi
 * ya muestra un contexto
 */
let unknownVar: unknown;
unknownVar = true;
unknownVar = "q";
unknownVar = [];
unknownVar = {};
let isNewKnown: boolean = unknownVar;
if (typeof unknownVar === "boolean") {
  let isNewKnown: boolean = unknownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
