/**
 * Funciona para definir un conjunto de variables 
 * en la aplicación
 */
export enum LABELS {
  COMPLETE = "Completo",
  INCOMPLETE = "Incompleto",
  NEW = "Nuevo",
}
export enum STATES {
  NEW = "Nuevo",
  DUPLICATE = "Duplicado",
  UPDATED = "Actualizado",
}
export type Form = {
  state: STATES;
  label: LABELS;
};
const newForm: Form = {
  state: STATES.NEW,
  label: LABELS.NEW,
};
console.log("🚀 ~ file: 01-enum.ts:22 ~ newForm", newForm)
