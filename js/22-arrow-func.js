// iprasta funkcija
function suma(a, b) {
    return a + b;
}

const atsSuma = suma(8, 5);
console.log(atsSuma);

/***************************************/

// bevardes funkcijos priskirimas kintamajam
const atimtis = function (a, b) {
    return a - b;
}

const atsAtimtis = atimtis(8, 5);
console.log(atsAtimtis);

/***************************************/

// arrow function priskirimas kintamajam
const daugyba = (a, b) => {
    return a * b;
}

const atsDaugyba = daugyba(8, 5);
console.log(atsDaugyba);

/***************************************/

// arrow function priskirimas kintamajam
// jeigu logika turi tik viena procedura, tai galima nerasyti {} ir return
const dalyba = (a, b) => a / b;

const atsDalyba = dalyba(8, 5);
console.log(atsDalyba);

/***************************************/

// arrow function priskirimas kintamajam
// jeigu logika turi tik viena procedura, tai galima nerasyti {} ir return
// jeigu parametru yra tik 1, tai galima nerasyti ()
const kvadratu = a => a * a;

const atsKvadratu = kvadratu(8);
console.log(atsKvadratu);


/***************************************/
/***************************************/
/***************************************/

const vardas = 'Pedro';

const pirmaRaide = name => name[0];
const paskutineRaide = name => name[name.length - 1];

const raide = pirmaRaide(vardas);
const paskutine = paskutineRaide(vardas);

console.log(raide);
console.log(paskutine);