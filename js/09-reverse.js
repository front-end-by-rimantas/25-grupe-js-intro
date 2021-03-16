/*
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
*/

const text = 'abcdef';
let reverse = '';

for (let i = 0; i < text.length; i++) {
    reverse = text[i] + reverse;
}

console.log(text, '->', reverse);

// for (let i = 0; i < text.length; i++) {
//     reverse += text[text.length - 1 - i];
// }

// for (let i = text.length - 1; i >= 0; i--) {
//     reverse += text[i];
// }

// for (let i = text.length; i > 0; i--) {
//     reverse += text[i - 1];
// }