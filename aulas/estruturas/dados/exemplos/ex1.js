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

function compararPessoas(person1, person2) {
    if (person1.age > person2.age){
        console.log(`${person1.name} é mais velho(a) que ${person2.name}`);
    
    }else if (person1.age < person2.age) {
        console.log(`${person1.name} é mais novo(a) que ${person2.name}`);
    
    }else console.log('ambos tem a mesma idade');
}

compararPessoas(davy, mateus);