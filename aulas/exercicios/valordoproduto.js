/* Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal
de etiqueta e a escolha da condição de pagamento.
Código da condição de pagamento:
- À vista débito, recebe 10% de desconto
- À vista em espécie ou pix, recebe 15% de desconto
- Em 2x preço normal de etiqueta sem juros
- Acima, preço nromal de etiqueta mais juros de 10% */
const priceProduct = 81500000000;

function aplicarDesconto(value, discount) {
    return value - (value * (discount/100));
}

function aplicarJuros(value, juros) {
    return value + (value * (juros/100));
}

function fazerPagamento(paymentMethod) {
    if (paymentMethod === 1) {
        console.log(`você ganhou 10% de desconto, total: ${aplicarDesconto(priceProduct, 10)} Reais`);
    } 
    
    else if (paymentMethod === 2) {
        console.log(`você ganhou 15% de desconto, total: ${aplicarDesconto(priceProduct, 15)} Reais`);
    }
    
    else if (paymentMethod === 3) {
        console.log(`valor total da compra parcelado em 2x: ${priceProduct} Reais`);
    }
    
    else {
        console.log (`valor da compra parcelada: ${aplicarJuros(priceProduct,10)} Reais`);
    }
}(1);
