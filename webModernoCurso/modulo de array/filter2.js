Array.prototype.filter2 = function(callback){
    const newArray = []

    for (i = 0; i < this.length ;  i++) {
        if(callback(this[i], i , this)) {
            newArray.push(this[i])
        }
    }

    return newArray

}


const produtos = [
    {nome : 'Notebook' , preco: 2995.00, fragil: true},
    {nome : 'Copo de Vidro' , preco: 12.49, fragil: true},
    {nome : 'Ipad Pro' , preco: 4199.00, fragil: true},
    {nome : 'Copo de prastico' , preco: 2, fragil: false},

]

const maiorPreco = produto => produto.preco >= 500
const frageis = produto => produto.fragil 

console.log(produtos.filter2(maiorPreco).filter2(frageis))