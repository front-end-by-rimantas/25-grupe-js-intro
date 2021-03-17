/*
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/javascript
*/

function century(year) {
    return Math.ceil(year / 100);
}

console.log(century(1705), '->', 18);
console.log(century(1900), '->', 19);
console.log(century(1601), '->', 17);
console.log(century(2000), '->', 20);
console.log(century(89), '->', 1);