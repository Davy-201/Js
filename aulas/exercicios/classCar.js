class Car {
    name;
    marca;
    cor;
    consumoPorKM;

    constructor(name, marca, cor, consumoPorKM){
        this.name = name
        this.marca = marca;
        this.cor = cor;
        this.consumoPorKM = consumoPorKM;
    }
};

const uno = new Car('uno', 'Fiat', 'Branco', 1/12)
console.log(`carro selecionado: ${uno.name}
marca: ${uno.marca} 
cor: ${uno.cor} 
consumo: ${uno.consumoPorKM}`);
