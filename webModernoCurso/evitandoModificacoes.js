const produto = Object.preventExtensions({
    nome:"Qualquer" , preco: 199, tag: "promocao"
}) //Nao deixa adicionar mais atributos

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Apaga lápis"
delete produto.tag
console.log(produto)


//seal
const pessoa = {nome : "pessoa" , idade : 19}

Object.seal(pessoa)

pessoa.nome = "Paulo"
delete pessoa.idade
pessoa.dataNascimento = "18/10/1990"

console.log(pessoa)


//Object.frezzer nao adiciona atributos e não altera tambem 


