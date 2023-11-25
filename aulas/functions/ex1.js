function main() {
    torrar("pão");
    ejetandoPão("pão");
    nota("pão", 9.99);
}

function torrar(bread) {
    console.log("torrando " + bread)
}

function ejetandoPão(bread) {
    console.log("preparando para ejetar o " + bread)
    console.log(bread + " ejetado")
}

function nota(bread, valor, name = "cliente") {
    console.log("torrada feita com " + bread)
    console.log("pedido feito por " + name)
    console.log("valor total do pedido: " + valor)
}

main();