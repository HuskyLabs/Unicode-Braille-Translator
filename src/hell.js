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

Usage in cmd: node hell.js <file name no spaces with ext>

From https://gist.github.com/letanure/10555668

https://www.pharmabraille.com/braille-codes/unified-english-braille-ueb-code/
better ^^^^^

https://www.pharmabraille.com/pharmaceutical-braille/the-braille-alphabet/

*/

console.log(`\ndb    db d8b   db d888888b  .o88b.  .d88b.  d8888b. d88888b 
88    88 888o  88   \`88'   d8P  Y8 .8P  Y8. 88  \`8D 88'     
88    88 88V8o 88    88    8P      88    88 88   88 88ooooo 
88    88 88 V8o88    88    8b      88    88 88   88 88~~~~~ 
88b  d88 88  V888   .88.   Y8b  d8 \`8b  d8' 88  .8D 88.     
~Y8888P' VP   V8P Y888888P  \`Y88P'  \`Y88P'  Y8888D' Y88888P 
                                                            
                                                            
d8888b. d8888b.  .d8b.  d888888b db      db      d88888b 
88  \`8D 88  \`8D d8' \`8b   \`88'   88      88      88'     
88oooY' 88oobY' 88ooo88    88    88      88      88ooooo 
88~~~b. 88\`8b   88~~~88    88    88      88      88~~~~~ 
88   8D 88 \`88. 88   88   .88.   88booo. 88booo. 88.     
Y8888P' 88   YD YP   YP Y888888P Y88888P Y88888P Y88888P 
                                                         
                                                         
d888888b d8888b.  .d8b.  d8b   db .d8888. db       .d8b.  d888888b  .d88b.  d8888b. 
\`~~88~~' 88  \`8D d8' \`8b 888o  88 88'  YP 88      d8' \`8b \`~~88~~' .8P  Y8. 88  \`8D 
   88    88oobY' 88ooo88 88V8o 88 \`8bo.   88      88ooo88    88    88    88 88oobY' 
   88    88\`8b   88~~~88 88 V8o88   \`Y8b. 88      88~~~88    88    88    88 88\`8b   
   88    88 \`88. 88   88 88  V888 db   8D 88booo. 88   88    88    \`8b  d8' 88 \`88. 
   YP    88   YD YP   YP VP   V8P \`8888Y' Y88888P YP   YP    YP     \`Y88P'  88   YD \n`);

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

function convertToBraille(text){
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
function convertToNormal(text){
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

// Make sure we got a filename on the command line.
if (process.argv.length < 3 || !process.argv[3]) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME' + ' TYPE');
    process.exit(1);
}
    // Read the file and print its contents.
var fs = require('fs')
    , file = process.argv[2];

fs.readFile(file, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + file);
    //console.log(data)

    const fileSplit = file.split(".");
    const filename = fileSplit[0];
    const ext = fileSplit[1];

    //console.log(filename);
    //console.log(ext);

    if (process.argv[3] == "toBraille") {
        fs.writeFile(`${filename}--BRAILLE.${ext}`, convertToBraille(data), function(err) {
            if(err) {
                return console.log(err);
            }
        
            console.log("The file was saved!");
            process.exit();
        }); 
    } else if (process.argv[3] == "toNormal") {
        fs.writeFile(`${filename}--NORMAL.${ext}`, convertToNormal(data), function(err) {
            if(err) {
                return console.log(err);
            }
        
            console.log("The file was saved!");
            process.exit();
        }); 
    }
});

/*
readline.question(`Whats the text?`, (text) => {
    console.log(convertToBraille(text));
    readline.close()
})*/
