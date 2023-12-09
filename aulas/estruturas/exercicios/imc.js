const peso = 78;
const altura = 1.87;
const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log('Você ésta abaixo do peso')
} 
else if (imc >= 18.5 && imc < 25) {
    console.log('Você ésta com peso normal')
}  
else if (imc >= 25 && imc < 30) {
    console.log('Você ésta acima do peso')
} 
else if (imc >= 30 && imc < 40) {
    console.log('Você ésta obeso')
} 
else {
    console.log('Você ésta com obesidade grave')
}

console.log(`seu peso: ${imc.toFixed(1)}`);