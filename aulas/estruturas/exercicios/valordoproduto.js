/* Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal
de etiqueta e a escolha da condição de pagamento.
Código da condição de pagamento:
- À vista débito, recebe 10% de desconto
- À vista em espécie ou pix, recebe 15% de desconto
- Em 2x preço normal de etiqueta sem juros
- Acima, preço nromal de etiqueta mais juros de 10% */

const priceProduct = 100;
const debito = priceProduct - (priceProduct * 0.1);
const monay = priceProduct - (priceProduct * (15/100));
const parcela = priceProduct + (priceProduct * 0.1);

let buy = 'money';

if (buy === 'debito') {
    console.log(`você ganhou 10% de desconto, total: ${debito}`);
} 
else if (buy === 'money') {
    console.log(`você ganhou 15% de desconto, total: ${monay}`);
}

else {
    console.log (`valor da compra parcelada: ${parcela}`);
};
