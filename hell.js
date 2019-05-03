//Usage in cmd: node hell.js <file name no spaces with ext>


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

//From https://gist.github.com/letanure/10555668

//https://www.pharmabraille.com/braille-codes/unified-english-braille-ueb-code/
// better ^^^^^

//https://www.pharmabraille.com/pharmaceutical-braille/the-braille-alphabet/

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

const englishTable = {
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

function convertToBraille(text){
    var brailleText = '';
    for (var i = 0; i < text.length; i++) {
        brailleText += brailleTable[text[i]]
        if (brailleTable[text[i]] == undefined) {
            console.log(text[i]);
        }
    };
    return brailleText;
}

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
    // Read the file and print its contents.
var fs = require('fs')
    , filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    //console.log(data)

    fs.writeFile(`BRAILLE--${filename}`, convertToBraille(data), function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
        process.exit();
    }); 
});

/*
readline.question(`Whats the text?`, (text) => {
    console.log(convertToBraille(text));
    readline.close()
})*/