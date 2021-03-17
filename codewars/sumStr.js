/*
https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
*/

function sumStr(a, b) {
    const pirmas = a === '' ? 0 : parseInt(a);
    const antras = b === '' ? 0 : parseInt(b);

    return '' + (pirmas + antras);
}

console.log(sumStr("4", "5"), '->', "9");
console.log(sumStr("34", "5"), '->', "39");
console.log(sumStr("", "5"), '->', "5");
console.log(sumStr("34", ""), '->', "34");
console.log(sumStr("", ""), '->', "0");