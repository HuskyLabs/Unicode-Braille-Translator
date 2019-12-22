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

Usage found in README.md
*/

const uebTable = require("./tables/ueb");

exports.convertToBraille = (text) => {
    var returnText = "";
    for (var i = 0; i < text.length; i++) {
        if (uebTable.braille.hasOwnProperty(text[i])) {
            returnText += uebTable.braille[text[i]];
        } else {
            //console.log(text[i])
            returnText += text[i];
        }
    };
    return returnText;
}

exports.convertToNormal = (text, country) => {
    var returnText = "";
    for (var i = 0; i < text.length; i++) {
        if (text[i] === "⠠"/*Capital*/ || text[i] === "⠼"/*Number*/ || text[i] === "⠫"/*Shape*/) {
            //If capital, number or shape, indicator
            continue;
        } else{
            if (text[i-1] === "⠠" /*Capital Indicator*/ ) {
                returnText += uebTable.normal[text[i-1] + text[i]]; //Searches table for indicator and the following char
                continue; //Breaks to avoid repeat of char 
            }
            if (text[i-1] === "⠼" /*Number Indicator*/ ) {
                returnText += uebTable.normal[text[i-1] + text[i]]; //Searches table for indicator and the following char
                continue; //Breaks to avoid repeat of char 
            }
            if (uebTable.normal.hasOwnProperty(text[i])/*Checks if char is in table*/) {
                returnText += uebTable.normal[text[i]];
            } else /*If not in table*/ {
                returnText += text[i];
            }
        }
    };
    return returnText;
}