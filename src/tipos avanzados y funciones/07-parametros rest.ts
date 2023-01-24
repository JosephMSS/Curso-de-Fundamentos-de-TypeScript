import { fromPairs } from "lodash";
import { Form, LABELS, STATES } from "./01-enum";
const form: Form = {
  label: LABELS.INCOMPLETE,
  state: STATES.NEW,
};
const checkCompleteLabel = () => form.label == LABELS.COMPLETE;
console.log(
  "🚀 ~ file: 06-parametros rest.ts:7 ~ checkCompleteLabel",
  checkCompleteLabel()
);

const checkLabelByIndividualParam = (label1: LABELS, label2: LABELS) => {
  if (label1 == form.label) true;
  if (label2 == form.label) true;
  return false;
};
checkLabelByIndividualParam(LABELS.COMPLETE, LABELS.NEW);
console.log(
  "🚀 ~ file: 06-parametros rest.ts:19 ~ checkLabelByIndividualParam(LABELS.COMPLETE, LABELS.NEW)",
  checkLabelByIndividualParam(LABELS.COMPLETE, LABELS.NEW)
);
const checkLabelByArrayParam = (list: LABELS[]) => list.includes(form.label);
console.log(
  "🚀 ~ file: 06-parametros rest.ts:19 ~ checkLabelByArrayParam([LABELS.COMPLETE, LABELS.NEW])",
  checkLabelByArrayParam([LABELS.COMPLETE, LABELS.NEW])
);
const checkLabelByRestParam = (...labels: LABELS[]) =>
  labels.includes(form.label);
console.log(
  "🚀 ~ file: 06-parametros rest.ts:19 ~ checkLabelByRestParam([LABELS.COMPLETE, LABELS.NEW])",
  checkLabelByRestParam(LABELS.INCOMPLETE, LABELS.NEW)
);
