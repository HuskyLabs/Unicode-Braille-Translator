const ubt = require("./index");

let str = " | \\ ";

console.log(ubt.convertToBraille(str));
console.log(ubt.convertToNormal(ubt.convertToBraille(str)));