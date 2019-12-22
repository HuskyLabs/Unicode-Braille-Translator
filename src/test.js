const ubt = require("./index");

let str = "This should still work,\nI guess, 1234";

console.log(ubt.convertToBraille(str));
console.log(ubt.convertToNormal(ubt.convertToBraille(str)));