const produtos = [
    {nome : 'Notebook' , preco: 2995.00, fragil: true},
    {nome : 'Copo de Vidro' , preco: 12.49, fragil: true},
    {nome : 'Ipad Pro' , preco: 4199.00, fragil: true},
    {nome : 'Copo de prastico' , preco: 2, fragil: false},

]

const maiorPreco = produto => produto.preco <= 500
const frageis = produto => produto.fragil 

console.log(produtos.filter(maiorPreco).filter(frageis))