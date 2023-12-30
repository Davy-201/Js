class Person{
    name;
    weight;
    height;

    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculatorImc(){
        let resultado = this.weight / Math.pow(this.height, 2)
        return resultado.toFixed(2)
    }

    classifyImc() {
        
        const imc = this.calculatorImc();

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
}

const davy = new Person('Davy', 78, 1.87)
console.log(davy.calculatorImc());
console.log(davy.classifyImc());