// AND ( && ) - 100 moedas coletadas E 1 item estrela
let moedasColetadas = 99
let item = "estrela"
let resultado = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultado)

// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva

let tempo = "chuva";
let guardaChuva = true;
let podeSair = (tempo !== "chuva" || guardaChuva === true);
if (tempo === "sol"){
        let clima = " ensolarado"
        console.log("o clima esta: " + clima)
    }else {
        let clima = "chuvoso"
        console.log("o clima esta: " + clima)
    }

console.log("temos um guarda chuva? " + guardaChuva)
console.log("podemos sair? " + podeSair)