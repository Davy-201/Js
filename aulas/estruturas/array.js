const notas = [];

notas.push(2);
notas.push(7);
notas.push(6);
notas.push(8);
notas.push(5);

let soma = 0;

for (let index = 0; index < notas.length; index++) {
    const nota = notas[index];
    soma += nota;
}
console.log(soma)
console.log(soma / notas.length);