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
}

const davy = new Person('Davy', 78, 1.87)
console.log(davy.calculatorImc());