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

    calcularGastoCombustivel(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.consumoPorKM * precoCombustivel
    }
};

const uno = new Car('uno', 'Fiat', 'Branco', 1/12)
console.log(`carro selecionado: ${uno.name}
marca: ${uno.marca} 
cor: ${uno.cor} 
consumo: ${uno.consumoPorKM}`);

console.log(uno.calcularGastoCombustivel(70, 5))
