function main() {
    torrar("pão integral");
    ejetandoPão("pão integral");
    pedido("joão");
}

function torrar(brad) {
    console.log("torrando pão")
    console.log("torrada feita com " + brad)
}

function ejetandoPão(brad) {
    console.log("preparando para ejetar pão")
    console.log(brad + " ejetado")
}

function pedido(name) {
    console.log("pedido feito por " + name)
}

main();