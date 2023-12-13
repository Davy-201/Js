const precoDoEtanol = 5.79;
const precoDaGasolina = 6.69;
const kmPorLitro = 10;
const kmRodado = 100;
const combustivel = 'etanol'
const isEtanol = (combustivel === 'gasosa');

const consumoCombustivel = kmRodado / kmPorLitro;

if (isEtanol){
    const valorGasto = consumoCombustivel * precoDoEtanol;
    console.log(valorGasto.toFixed(2));
} 
else{
    const valorGasto = consumoCombustivel * precoDaGasolina;
    console.log(valorGasto.toFixed(2));
}

