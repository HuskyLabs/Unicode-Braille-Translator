[![](https://img.shields.io/npm/dt/unicode-braille-translator)](https://www.npmjs.com/package/unicode-braille-translator) [![forthebadge](https://forthebadge.com/images/badges/designed-in-ms-paint.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/mom-made-pizza-rolls.svg)](https://forthebadge.com) [![](https://img.shields.io/npm/v/unicode-braille-translator)](https://www.npmjs.com/package/unicode-braille-translator)

# Install
```
npm install unicode-braille-translator
```

# Unicode Braille Translator
An easy, and simple npm package that converts text to braille and back. Robust and reliable with an ever increasing accuracy.

## ⚠ Warning ⚠ : This is api is still being developed, expect some wrong "translations."

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
