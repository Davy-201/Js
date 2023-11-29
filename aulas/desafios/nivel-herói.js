let nameHero = "deku";
let xpHeroi = 0;

for (let contador = 0; contador < 5000; contador +=2500 ) {
    xpHeroi += 2500
}

do {
    xpHeroi += 500
}while (xpHeroi <= 6500);

while (xpHeroi < 10500) {
    xpHeroi += 500
}

if (xpHeroi <= 1000) {
    let nivel = "ferro";
    console.log(`o herói ${nameHero} está no nivel de ${nivel}`);
;
} else if (xpHeroi > 1000 && xpHeroi <= 2000) {
    let nivel = "bronze";
    console.log(`o herói ${nameHero} está no nivel de ${nivel}`);
} else if (xpHeroi > 2000 && xpHeroi <=5000) {
    let nivel = "prata";
    console.log(`o herói ${nameHero} está no nivel de ${nivel}`);
} else if (xpHeroi > 6000 && xpHeroi <=7000) {
    let nivel = "ouro";
    console.log(`o herói ${nameHero} está no nivel de ${nivel}`);
} else if (xpHeroi > 7000 && xpHeroi <=8000) {
    let nivel = "platina";
    console.log(`o herói ${nameHero} está no nivel de ${nivel}`);
} else if (xpHeroi > 8000 && xpHeroi <=9000) {
    let nivel = "Ascendente";
    console.log(`o herói ${nameHero} está no nivel de ${nivel}`);
} else if (xpHeroi > 9000 && xpHeroi <=10000) {
    let nivel = "imortal";
    console.log(`o herói ${nameHero} está no nivel de ${nivel}`);
} else {
    let nivel = "radiante";
    console.log(`o herói ${nameHero} está no nivel de ${nivel}`);
};

console.log("XP do Herói: " + xpHeroi);