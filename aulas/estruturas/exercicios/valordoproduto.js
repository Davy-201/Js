/* Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal
de etiqueta e a escolha da condição de pagamento.
Código da condição de pagamento:
- À vista débito, recebe 10% de desconto
- À vista em espécie ou pix, recebe 15% de desconto
- Em 2x preço normal de etiqueta sem juros
- Acima, preço nromal de etiqueta mais juros de 10% */

const priceProduct = 100;
const paymentMethod = 1
const debito = priceProduct - (priceProduct * 0.1);
const monay = priceProduct - (priceProduct * (15/100));
const parcela = priceProduct + (priceProduct * 0.1);

if (paymentMethod === 1) {
    console.log(`você ganhou 10% de desconto, total: ${debito} Reais`);
} 

else if (paymentMethod === 2) {
    console.log(`você ganhou 15% de desconto, total: ${monay} Reais`);
}

else if (paymentMethod === 3) {
    console.log(`valor total da compra parcelado em 2x: ${priceProduct} Reais`);
}

else {
    console.log (`valor da compra parcelada: ${parcela} Reais`);
};
