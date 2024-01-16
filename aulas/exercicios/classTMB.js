class Pessoa {
    name;
    weight;
    height;
    age;

    constructor(name, weight, height, age){
        this.name = name
        this.weight = weight
        this.height = height
        this.age = age
    }

    calculatorTmb() {
        return 665 + (9,6 * this.weight) + (1,8 * this.height) - (4,7 * this.age);
    }

};

const renata = new Pessoa('Renata', 58, 162, 29)

console.log(`${renata.name}, sua taxa de metabolismo basal é: ${renata.calculatorTmb()}`);
