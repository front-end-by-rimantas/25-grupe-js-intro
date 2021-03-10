/*
VISOS KOMBINACIJOS DARBUI SU TEKSTU
*/

// Siandien yra: Kovo desimta.
const menuo = 'Kovo';
const diena = 'desimta';

const dayString = 'Siandien yra: ' + menuo + ' ' + diena + '.';
console.log(dayString);

// Cia yra dvyguba (") kabute.
const dvygubaKabute = 'Cia yra dvyguba (") kabute.';
console.log(dvygubaKabute);

// Cia yra vienguba (') kabute.
const viengubaKabute = "Cia yra vienguba (') kabute.";
console.log(viengubaKabute);

// Turiu vienguba (') ir dvyguba (") kabutes.
const viengubaDvyguba = "Turiu vienguba (') ir dvyguba (\") kabutes.";
console.log(viengubaDvyguba);

// Turiu dvyguba (") ir vienguba (') kabutes.
const dvygubaVienguba = 'Turiu dvyguba (") ir vienguba (\') kabutes.';
console.log(dvygubaVienguba);

// Max saugumas dvyguba (") ir vienguba (') kabutes.
const maxKabutes1 = 'Max saugumas dvyguba (\") ir vienguba (\') kabutes.';
console.log(maxKabutes1);

// Max saugumas dvyguba (") ir vienguba (') kabutes.
const maxKabutes2 = "Max saugumas dvyguba (\") ir vienguba (\') kabutes.";
console.log(maxKabutes2);

const navHTML = '<nav>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                </nav>';
console.log(navHTML);

console.log('-------------');


// Mano vardas: Petras.
const vardas = 'Maryte';
const petrasIntro = 'Mano vardas: ' + vardas + '.';
console.log(petrasIntro);

const petrasBacktick = `Mano vardas: ${vardas}.`;
console.log(petrasBacktick);

// Naujausias pazymys: 2.
const marks = [10, 5, 8, 7, 2, 10, 8, 6];
const markSentence0 = `Pirmas pazymys: ${marks[0]}.`;
console.log(markSentence0);
const markSentence1 = `Antras pazymys: ${marks[1]}.`;
console.log(markSentence1);
const markSentence = `Naujausias pazymys: ${marks[marks.length - 1]}.`;
console.log(markSentence);


const navHTML2 = `<nav>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </nav>`;
console.log(navHTML2);