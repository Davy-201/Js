const nameHero = "deku";
let xpHeroi = 0;
let nivel= ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante']

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
    console.log(`o herói ${nameHero} está no nivel de ${nivel[0]}`);

}
else if (xpHeroi > 1000 && xpHeroi <= 2000) {
    console.log(`o herói ${nameHero} está no nivel de ${nivel[1]}`);

}
else if (xpHeroi > 2000 && xpHeroi <=5000) {
    console.log(`o herói ${nameHero} está no nivel de ${nivel[2]}`);

}
else if (xpHeroi > 6000 && xpHeroi <=7000) {
    console.log(`o herói ${nameHero} está no nivel de ${nivel[3]}`);

}
else if (xpHeroi > 7000 && xpHeroi <=8000) {
    console.log(`o herói ${nameHero} está no nivel de ${nivel[4]}`);

}
else if (xpHeroi > 8000 && xpHeroi <=9000) {
    console.log(`o herói ${nameHero} está no nivel de ${nivel[5]}`);

}
else if (xpHeroi > 9000 && xpHeroi <=10000) {
    console.log(`o herói ${nameHero} está no nivel de ${nivel[6]}`);

}
else {
    console.log(`o herói ${nameHero} está no nivel de ${nivel[7]}`);
}

console.log("XP do Herói: " + xpHeroi);