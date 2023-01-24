/**
 * Funciona para definir un conjunto de variables 
 * en la aplicación
 */
enum LABELS {
  COMPLETE = "Completo",
  INCOMPLETE = "Incompleto",
  NEW = "Nuevo",
}
enum STATES {
  NEW = "Nuevo",
  DUPLICATE = "Duplicado",
  UPDATED = "Actualizado",
}
type Form = {
  state: STATES;
  label: LABELS;
};
const newForm: Form = {
  state: STATES.NEW,
  label: LABELS.NEW,
};
console.log("🚀 ~ file: 01-enum.ts:22 ~ newForm", newForm)
