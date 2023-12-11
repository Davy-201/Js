//JSON - JavaScript Object Notation
// chave e valor com o objetivo de transferir dados
let invoice = {
	name: "Davy",
    age: 20,
    products: {
    	0: ["mouse 2xwm", 29.90],
        1: ["Monitor", 129.99],
        2: ["intel core i5", "899.99"],
        3: ["RTX 3060 olx", "10000.90"]
    },
    taxes: "98.90"
}

generateInvoice(invoice)

function generateInvoice(invoice){
	console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("------------")
    
    for(let index in invoice.products){
    	let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
    
    
}