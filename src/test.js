const ubt = require("./index");

str = " | \\ "

console.log(ubt.convertToBraille(str));
console.log(ubt.convertToNormal(ubt.convertToBraille(str)));