import uebTable from './tables/ueb';

class Translator {
  language: string;
  constructor(language: string = 'ueb') {
    this.language = 'ueb';
  }

  get lang() {
    return this.language;
  }

  toBraille(text: string) {
    // return new Promise<string>((resolve, reject) => {
    //     resolve(uebBraille(text));
    // });
    switch (this.language) {
      case 'ueb':
        return uebBraille(text);
      default:
        return uebBraille(text);
    }
  }

  toNormal(text: string) {
    // return new Promise<string>((resolve, reject) => {
    //     resolve()
    // });
    switch (this.language) {
      case 'ueb':
        return uebTraditional(text);
      default:
        return uebTraditional(text);
    }
  }
}

async function uebBraille(text: string) {
  type Key = keyof typeof uebTable.braille;
  // const getkey = <T extends object, U extends keyof T>(key: U) => (obj: T) => obj[key];
  // let returnText: string = '';

  const returnText: string = text
    .split('')
    .map((char) => {
      if (uebTable.braille.hasOwnProperty(char)) {
        const key: Key = char as Key;
        const value: string = uebTable.braille[key];
        // That is a mess ^
        return value;
      } else {
        // console.log(text[i])
        return char;
      }
      // uebTable.braille[c]
    })
    .join('');

  // for (const char of text) {
  //     if (uebTable.braille.hasOwnProperty(char)) {
  //         const key: Key = char as Key;
  //         const value: string = uebTable.braille[key];
  //         // That is a mess ^
  //         returnText += value;
  //     } else {
  //         // console.log(text[i])
  //         returnText += char;
  //     }
  // }
  // return returnText;

  return returnText;
}

async function uebTraditional(text: string) {
  type Key = keyof typeof uebTable.normal;
  let returnText: string = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '⠠' /*Capital*/ || text[i] === '⠼' /*Number*/ || text[i] === '⠫' /*Shape*/) {
      // If capital, number or shape, indicator
      continue;
    } else {
      if (text[i - 1] === '⠠' /*Capital Indicator*/) {
        const char: string = text[i - 1] + text[i];
        const key: Key = char as Key;
        const value: string = uebTable.normal[key];

        returnText += value; // Searches table for indicator and the following char
        continue; // Breaks to avoid repeat of char
      }
      if (text[i - 1] === '⠼' /*Number Indicator*/) {
        const char: string = text[i - 1] + text[i];
        const key: Key = char as Key;
        returnText += uebTable.normal[key]; // Searches table for indicator and the following char
        continue; // Breaks to avoid repeat of char
      }
      if (uebTable.normal.hasOwnProperty(text[i]) /*Checks if char is in table*/) {
        const char: string = text[i];
        const key: Key = char as Key;
        returnText += uebTable.normal[key];
      } /*If not in table*/ else {
        returnText += text[i];
      }
    }
  }
  return returnText;
}

export default Translator;
