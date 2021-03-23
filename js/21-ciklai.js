/*
JS galima ciklai ir "cikliskos" funkcijos/metodai:

(funkcijos)
- for
- for-in
- for-of
- while
- do-while

(metodai)
- foreach
- map
- filter
- reduce
- sort
*/

const list = [1, -5, 78, 2, 11, -14, 0, -3];

// FOR
// break: nutraukia ciklo darba
// continue: eiti i sekancia ciklo iteracija, jei tokia yra


for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (item > 0) {
        continue;
    }
    console.log(item);
}

console.clear();


// FOR-IN
// break: nutraukia ciklo darba
// continue: eiti i sekancia ciklo iteracija, jei tokia yra

for (const i in list) {
    const item = list[i];
    if (item > 0) {
        continue;
    }
    console.log(i, item);
}

console.clear();

// FOR-OF
// break: nutraukia ciklo darba
// continue: eiti i sekancia ciklo iteracija, jei tokia yra

for (const item of list) {
    if (item > 0) {
        continue;
    }
    console.log(item);
}

console.clear();

// WHILE
// break: nutraukia ciklo darba

let randomNumber = 0;
let randomNumberCount = 0;

while (randomNumber < 0.9) {
    randomNumber = Math.random();           // [0..1)
    randomNumberCount++;
    console.log(randomNumberCount, randomNumber);
}

console.clear();

let i = 0;
while (i < list.length) {
    const item = list[i];
    if (item < -10) {
        break;
    }

    console.log(item);
    i++;
}

console.clear();

// DO-WHILE
// break: nutraukia ciklo darba

let dwi = 0;

do {
    console.log(dwi);
    if (dwi > 2) {
        break;
    }
    dwi++;
} while (dwi < 5)