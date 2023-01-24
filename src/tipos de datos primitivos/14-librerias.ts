import { subDays, format } from "date-fns";
import _ from "lodash";
const date = new Date(1998, 1, 28);
const rta = subDays(date, 30);
const str = format(rta, "yyyy/MM/dd");
console.log("🚀 ~ file: 14-librerias.ts:5 ~ str", str);