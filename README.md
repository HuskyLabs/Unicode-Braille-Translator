[![](https://img.shields.io/npm/dt/unicode-braille-translator)](https://www.npmjs.com/package/unicode-braille-translator) [![forthebadge](https://forthebadge.com/images/badges/designed-in-ms-paint.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/mom-made-pizza-rolls.svg)](https://forthebadge.com) [![](https://img.shields.io/npm/v/unicode-braille-translator)](https://www.npmjs.com/package/unicode-braille-translator) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/a5dd75ce692949be897aeb0d849046e8)](https://www.codacy.com/manual/Huskydog9988/Unicode-Braille-Translator?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Huskydog9988/Unicode-Braille-Translator&amp;utm_campaign=Badge_Grade)

# Install
```
npm install unicode-braille-translator
```

# Unicode Braille Translator
An easy, and simple npm package to use that converts text to braille and back. Robust and reliable with an ever increasing accuracy.

## ⚠ Warning ⚠ : This is api is still being developed, expect some wrong "translations." Also this project only currently supports Unified English Braille (UEB)

# Docs
**Convert Text To Braille**
```javascript
const ubt = require("unicode-braille-translator");
console.log(ubt.convertToBraille("Your text here!"));
```

**Convert Braille To "Normal" Text**
```javascript
const ubt = require("unicode-braille-translator");
console.log(ubt.convertToNormal("Your braille text here!"));
```