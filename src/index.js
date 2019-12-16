/*
MIT License

Copyright (c) 2019 Huskydog9988

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

-----------------------------------------------------------------------------------

Usage in cmd: node hell.js <file name no spaces with ext>

From https://gist.github.com/letanure/10555668

https://www.pharmabraille.com/braille-codes/unified-english-braille-ueb-code/
better ^^^^^

https://www.pharmabraille.com/pharmaceutical-braille/the-braille-alphabet/
*/

var brailleTable = {
    '1':  '⠼⠁',
    '2':  '⠼⠃',
    '3':  '⠼⠉',
    '4':  '⠼⠙',
    '5':  '⠼⠑',
    '6':  '⠼⠋',
    '7':  '⠼⠛',
    '8':  '⠼⠓',
    '9':  '⠼⠊',
    '0':  '⠼⠚',
    'A':  '⠠⠁',
    'B':  '⠠⠃',
    'C':  '⠠⠉',
    'D':  '⠠⠙',
    'E':  '⠠⠑',
    'F':  '⠠⠋',
    'G':  '⠠⠛',
    'H':  '⠠⠓',
    'I':  '⠠⠊',
    'J':  '⠠⠚',
    'K':  '⠠⠅',
    'L':  '⠠⠇',
    'M':  '⠠⠍',
    'N':  '⠠⠝',
    'O':  '⠠⠕',
    'P':  '⠠⠏',
    'Q':  '⠠⠟',
    'R':  '⠠⠗',
    'S':  '⠠⠎',
    'T':  '⠠⠞',
    'U':  '⠠⠥',
    'V':  '⠠⠧',
    'W':  '⠠⠺',
    'X':  '⠠⠭',
    'Y':  '⠠⠽',
    'Z':  '⠠⠵',
    'a':  '⠁',
    'b':  '⠃',
    'c':  '⠉',
    'd':  '⠙',
    'e':  '⠑',
    'f':  '⠋',
    'g':  '⠛',
    'h':  '⠓',
    'i':  '⠊',
    'j':  '⠚',
    'k':  '⠅',
    'l':  '⠇',
    'm':  '⠍',
    'n':  '⠝',
    'o':  '⠕',
    'p':  '⠏',
    'q':  '⠟',
    'r':  '⠗',
    's':  '⠎',
    't':  '⠞',
    'u':  '⠥',
    'v':  '⠧',
    'w':  '⠺',
    'x':  '⠭',
    'y':  '⠽',
    'z':  '⠵',
    '.': '⠲',
    ',':  '⠂',
    '?': '⠦',
    ';':  '⠆',
    '!':  '⠖',
    '<':  '⠦',
    '>':  '⠴',
    '\\': '⠶',
    '-':  '⠤',
    "'":  '⠄',

    //start of new section
    " ":  " ",
    ":":  "⠒",
    '“':  '⠄⠶',
    '"':  '⠘⠦',
    '”':  '⠘⠴',
    '‘':  "⠄⠦",
    '’':  "⠄⠴",
    '(':  '⠐⠣',
    ')':  '⠐⠜',
    '/':  '⠸⠌',
    '\\':  '⠸⠡',
    '–':  '⠤',
    //'–':  '⠠⠤',
    '—':  '⠐⠠⠤',

    '&':  '⠈⠯',

    '*':  '⠐⠔',
    '@':  '⠈⠁',
    '©':  '⠘⠉',
    '®':  '⠘⠗',
    '™':  '⠘⠞',
    '°':  '⠘⠚',
    '%':  '⠨⠴',
    '+':  '⠐⠖',
    '−':  '⠐⠤',
    '=':  '⠐⠶',
    '×':  '⠐⠦',
    '÷':  '⠐⠌',

    '½':  '⠼⠁⠌⠃',
    '2¾':  '⠼⠃⠼⠉⠌⠙',

    //below is grade 1 symbol indicator
    '⠰':  '⠰',
}

const normalTable = {
    '⠼⠁':  '1',
    '⠼⠃':  '2',
    '⠼⠉':  '3',
    '⠼⠙':  '4',
    '⠼⠑':  '5',
    '⠼⠋':  '6',
    '⠼⠛':  '7',
    '⠼⠓':  '8',
    '⠼⠊':  '9',
    '⠼⠚':  '0',
    '⠠⠁':  'A',
    '⠠⠃':  'B',
    '⠠⠉':  'C',
    '⠠⠙':  'D',
    '⠠⠑':  'E',
    '⠠⠋':  'F',
    '⠠⠛':  'G',
    '⠠⠓':  'H',
    '⠠⠊':  'I',
    '⠠⠚':  'J',
    '⠠⠅':  'K',
    '⠠⠇':  'L',
    '⠠⠍':  'M',
    '⠠⠝':  'N',
    '⠠⠕':  'O',
    '⠠⠏':  'P',
    '⠠⠟':  'Q',
    '⠠⠗':  'R',
    '⠠⠎':  'S',
    '⠠⠞':  'T',
    '⠠⠥':  'U',
    '⠠⠧':  'V',
    '⠠⠺':  'W',
    '⠠⠭':  'X',
    '⠠⠽':  'Y',
    '⠠⠵':  'Z',
    '⠁':  'a',
    '⠃':  'b',
    '⠉':  'c',
    '⠙':  'd',
    '⠑':  'e',
    '⠋':  'f',
    '⠛':  'g',
    '⠓':  'h',
    '⠊':  'i',
    '⠚':  'j',
    '⠅':  'k',
    '⠇':  'l',
    '⠍':  'm',
    '⠝':  'n',
    '⠕':  'o',
    '⠏':  'p',
    '⠟':  'q',
    '⠗':  'r',
    '⠎':  's',
    '⠞':  't',
    '⠥':  'u',
    '⠧':  'v',
    '⠺':  'w',
    '⠭':  'x',
    '⠽':  'y',
    '⠵':  'z',
    '⠲':  '.',
    '⠂':  ',',
    '⠦':  '?',
    '⠆':  ';',
    '⠖':  '!',
    //'<':  '⠦',
    '⠴':  '>',
    '⠶': '\\',
    '⠤':  '-',
    "⠄":  "'",

    //start of new section
    " ":  " ",

    '⠄⠶':  '“',
    '⠘⠦':  '“',
    '⠘⠴':  '”',
    '⠄⠦':  "‘",
    '⠄⠴':  "’",
    '⠐⠣':  '(',
    '⠐⠜':  ')',
    '⠸⠌':  '/',
    '⠸⠡':  '\\',
    '⠤':  '–',
    '⠠⠤':  '–',
    '⠐⠠⠤':  '—',

    '⠈⠯':  '&',

    '⠐⠔':  '*',
    '⠈⠁':  '@',
    '⠘⠉':  '©',
    '⠘⠗':  '®',
    '⠘⠞':  '™',
    '⠘⠚':  '°',
    '⠨⠴':  '%',
    '⠐⠖':  '+',
    '⠐⠤':  '−',
    '⠐⠶':  '=',
    '⠐⠦':  '×',
    '⠐⠌':  '÷',

    '⠼⠁⠌⠃':  '½',
    '⠼⠃⠼⠉⠌⠙':  '2¾',

    //below is grade 1 symbol indicator
    '⠰':  '⠰',
}

const aJ = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",];

/*
Based on https://gist.github.com/letanure/10555668

https://www.pharmabraille.com/braille-codes/unified-english-braille-ueb-code/
better ^^^^^

https://www.pharmabraille.com/pharmaceutical-braille/the-braille-alphabet/
*/

exports.convertToBraille = (text) => {
    var brailleText = '';
    for (var i = 0; i < text.length; i++) {
        if (brailleTable.hasOwnProperty(text[i])) {
            brailleText += brailleTable[text[i]];
        } else {
            //console.log(text[i])
            brailleText += text[i];
        }
    };
    return brailleText;
}

exports.convertToNormal = (text) => {
    var normalText = '';
    for (var i = 0; i < text.length; i++) {
        if (text[i] == "⠠") {
            //If capital indicator
            continue;
        } else{
            if (text[i-1] == "⠠" /*Capital Indicator*/ ) {
                normalText += normalTable[text[i-1] + text[i]]; //Searches table for capital indicator and the following letter
                continue; //Breaks to avoid possible repeat of letter 
            }
            if (normalTable.hasOwnProperty(text[i])) {
                normalText += normalTable[text[i]];
            } else {
                normalText += text[i];
            }
        }
    };
    return normalText;
}