// const _ = require("lodash");
import _ from "lodash";
const data = [
  { username: "nico", role: "admin" },
  { username: "names", role: "cocinar" },
  { username: "names", role: "cocinar" },
];
const group = _.groupBy(data, (item) => {
  return item.role;
});
console.log("🚀 ~ file: 14-libreriasSinSoporte.ts:9 ~ group", group);
const a = 1 + "1";
