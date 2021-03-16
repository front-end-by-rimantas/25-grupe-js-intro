/*
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai)
ATS:
Intervale nuo 0 iki 4 suma yra 10.

0 - 4           = 10
10 - 14         = 60
20 - 24         = 110
-50 - 50        = 0
0 - 100         = 5050
574 - 815       = labai didelis skaicius
-70 - 30        = santykinai didelis neigiamas skaicius (-2020)
0 - 0           = 0
0 - 99999999999 = astroniskai didelis skaicius

*/

const nuo = 0;
const iki = 10;
let suma = 0;

if (nuo <= iki) {
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }
} else {
    for (let i = iki; i <= nuo; i++) {
        suma += i;
    }
}

const ats = `Intervale nuo ${nuo} iki ${iki} suma yra ${suma}.`;
console.log(ats);