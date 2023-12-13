function main() {
    const weight = 78;
    const height = 1.87;
    const imc = calculatorImc(78, 1.87);

    console.log(`seu peso:${imc.toFixed(1)} ${classifyImc(imc)}`);
}

function calculatorImc(weight, height) {
    return weight / Math.pow(height, 2);
}

function classifyImc(imc) {

    if (imc < 18.5) {
        return 'Você ésta abaixo do peso'
    } 
    else if (imc >= 18.5 && imc < 25) {
        return 'Você ésta com peso normal'
    }  
    else if (imc >= 25 && imc < 30) {
        return 'Você ésta acima do peso'
    } 
    else if (imc >= 30 && imc < 40) {
        return 'Você ésta obeso'
    } 
    else {
        return 'Você ésta com obesidade grave'
    }
}

main();