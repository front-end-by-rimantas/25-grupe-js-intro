const a = 8;
const b = 5;

const c = 99;
const d = 88;

const e = 2;
const f = 3;


function desimteriopaSuma(pirmas, antras) {
    const s = (pirmas + antras) * 10;
    console.log(s);
}

desimteriopaSuma(e, f);
console.log('--------');
desimteriopaSuma(a, b);
console.log('--------');
desimteriopaSuma(c, d);





function labas(vardas, amzius, vietovadis) {
    console.log(`Labas, as esu ${vardas}, man ${amzius} metai ir gyvenu ${vietovadis}.`);
}

labas('Petras', 88, 'vilniuje');
labas('Maryte', 77, 'Kaune');
labas('Alphe', 5, 'namie');




// f(x) = x*x;

function kvadaratu(x) {
    console.log(x * x);
}

kvadaratu(5)
kvadaratu(55)
kvadaratu(5554845)