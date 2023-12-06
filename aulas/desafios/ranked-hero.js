const nameHero = "tony stark";
let level = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal']
let amountVictory = historicPVP(8,2);

function historicPVP(victory, defeat) {
    return victory-defeat
}

for (amountVictory; amountVictory < 105 ; amountVictory++) {
}

if (amountVictory <= 10) {
    console.log(`o herói ${nameHero} tem um saldo de ${amountVictor} vitórias e está no nivel de ${nivel[0]}`);

}
else if (amountVictory > 10 && amountVictory <= 20) {
    console.log(`o herói ${nameHero} tem um saldo de ${amountVictor} vitórias e está no nivel de ${nivel[1]}`);

}
else if (amountVictory > 20 && amountVictory <=50) {
    console.log(`o herói ${nameHero} tem um saldo de ${amountVictor} vitórias e está no nivel de ${nivel[2]}`);

}
else if (amountVictory > 50 && amountVictory <=80) {
    console.log(`o herói ${nameHero} tem um saldo de ${amountVictor} vitórias e está no nivel de ${nivel[3]}`);

}
else if (amountVictory > 80 && amountVictory <=90) {
    console.log(`o herói ${nameHero} tem um saldo de ${amountVictor} vitórias e está no nivel de ${nivel[4]}`);

}
else if (amountVictory > 90 && amountVictory <=100) {
    console.log(`o herói ${nameHero} tem um saldo de ${amountVictor} vitórias e está no nivel de ${nivel[5]}`);

}
else {
    console.log(`o herói ${nameHero} tem um saldo de ${amountVictor} vitórias e está no nivel de ${nivel[6]}`);
};