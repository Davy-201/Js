class person{

    name;
    age;
    weight;

    constructor(name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    descrever() {
        console.log(`meu nome é ${this.name} e minha idade: ${this.age}`);
    }
};


const davy = new person()
davy.name = 'davy';
davy.age = 22;

const mateus = new person('mateus', 20);

davy.descrever();
mateus.descrever();
