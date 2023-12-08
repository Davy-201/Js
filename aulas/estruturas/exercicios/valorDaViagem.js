const precoDoCombustivel = 5.79;
const kmPorLitro = 10;
const kmRodado = 100;

const consumoCombustivel = kmRodado / kmPorLitro;
const valorGasto = consumoCombustivel * precoDoCombustivel;
console.log(valorGasto.toFixed(2));
