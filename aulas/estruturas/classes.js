class formaDeBolo{
    constructor(saborDaMassa, saborDoRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio
    }
};

let boloFesta = new formaDeBolo("massa de chocolate", "recheio de nutella");

console.log(boloFesta);