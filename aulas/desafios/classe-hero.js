class hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        if (this.tipo === 'mago') {
            let ataque = 'magia'
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
};

let heroi = new hero('davy', 20, 'mago')
console.log(heroi)

