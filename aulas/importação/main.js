/*

object destructuring

const pessoa = {
    nome: 'vitor'
};

const {nome} = pessoa;

const nome = pessoa.nome;


const { gets, print} = require('./funçoesauxiliares');

print(gets());

*/

const funcoes = require('./funçoesauxiliares');

const numerosSorteados = [];

for (let index = 0; index < 5; index++) {
    const numeroSorteado = funcoes.gets();
    numerosSorteados.push(numeroSorteado);
    
}

let maiorValor = 0;

for (let index = 0; index < numerosSorteados.length; index++) {
    const numeroSorteado = numerosSorteados[index];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

console.log(maiorValor);