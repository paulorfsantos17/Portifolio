function getPreco ( imposto = 0,  moeda = 'R$'){

    return `${moeda} ${this.preco * (1 - this.desconto)  * (1 +  imposto) }`

}

const produto ={
    name: "celular",
    preco : 1500,
    desconto: 0.1,
    getPreco
}

console.log(produto.getPreco())
global.preco = 2000
global.desconto= 0.2
console.log(getPreco())

const carro = {preco : 50555, desconto: 0.15}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.1 ,'$'))
console.log(getPreco.apply(carro, [0.1, '$']))



