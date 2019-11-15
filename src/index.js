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
    "\n":  "\n",
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
            brailleText += text[i];
        }
    };
    return brailleText;
}

exports.convertToNormal = (text) => {
    var normalText = '';
    for (var i = 0; i < text.length; i++) {
        if (normalTable.hasOwnProperty(text[i])) {
            normalText += normalTable[text[i]];
        } else {
            normalText += text[i];
        }
    };
    return normalext;
}