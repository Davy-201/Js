let nameHeroi = "deku";
let xpHeroi = 0;

for (let contador = 0; contador < 5000; contador +=2500 ) {
    xpHeroi += 2500
    console.log('herói ganhou '+xpHeroi+' pontos de XP');
}

console.log(nameHeroi+" tem "+ xpHeroi + " pontos de experiência ")

do {
    console.log('herói tem agora '+xpHeroi+' pontos de XP');
    xpHeroi += 500
}while (xpHeroi <= 6500);

console.log(xpHeroi)

if (xpHeroi <= 1000) {
    let nivel = "ferro";
    console.log('o herói '+ nameHeroi + ' está no nivel ' + nivel);
} else if (xpHeroi > 1000 && xpHeroi <= 2000) {
    let nivel = "bronze";
    console.log('o herói '+ nameHeroi + ' está no nivel ' + nivel)
} else if (xpHeroi > 2000 && xpHeroi <=5000) {
    let nivel = "prata";
    console.log('o herói '+ nameHeroi + ' está no nivel ' + nivel)
} else if (xpHeroi > 6000 && xpHeroi <=7000) {
    let nivel = "ouro";
    console.log('o herói '+ nameHeroi + ' está no nivel ' + nivel)
}