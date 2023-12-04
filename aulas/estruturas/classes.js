class formaDeBolo{
    constructor(saborDaMassa, saborDoRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio
    }

    escrever(){
        console.log(`um delicioso bolo com massa de ${this.saborDaMassa} e recheio de ${this.saborDoRecheio}`)
    }
};

let boloFesta = new formaDeBolo("chocolate", "nutella");

console.log(`qual o é o recheio do bolo? ${boloFesta.saborDoRecheio}`)

console.log(boloFesta);