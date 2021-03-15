/*

TERNARY OPERATOR: ? (klaustukas)

palyginimas ? ka daryti jei teikina logika : ka daryti jei logikos netenkina

palyginimas ? true : false

*/

const a = 5;
const b = 7;

let ats = '';

if (a > b) {
    ats = 'daugiau';
} else {
    ats = 'ne daugiau';
}

console.log(ats);


const c = 5;
const d = 7;

const ats2 = c > d ? 'daugiau' : 'ne daugiau';

console.log(ats2);