let nameHeroi = "deku";
let xpHeroi = 0;

for (let contador = 0; contador < 1000; contador +=500 ) {
    xpHeroi += 500
    console.log('herói ganhou '+xpHeroi+' pontos de XP');
    let nivel = ""
}

console.log("pontos de experiência "+ xpHeroi)

if (xpHeroi <= 1000) {
    let nivel = 'ferro';
    console.log('o herói '+ nameHeroi + ' está no nivel ' + nivel);
}