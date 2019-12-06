const ubt = require("./index");

str = ". / ( ) ' \" * & ^ % $ # @ ! ` ~ ; : < > , | + = - _ "

console.log(ubt.convertToBraille(str));
console.log(ubt.convertToNormal(ubt.convertToBraille(str)));