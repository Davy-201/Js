const person = {
    name: 'Davy Rodrigues',
    age: 22,
    weight: 1.87,

    descrever: function() {
        console.log(`meu nome é ${this.name} e minha idade: ${this.age}`);
    }
};

person.descrever();
