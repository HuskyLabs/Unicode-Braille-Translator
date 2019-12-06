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
