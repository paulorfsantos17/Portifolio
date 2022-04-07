const soma = function(a, b) {
    return a + b
}

const imprimirResultado = function (a , b , operacao = soma) {
     console.log(operacao(a , b))
}

imprimirResultado(1, 2)
imprimirResultado( 5, 7 , (a , b) =>  a -  b )
imprimirResultado(8 ,6 , function(a , b) {
     return a * b 
})

 const dividir = {
     operacao: function (a, b){
            return a / b
     }
 }

 imprimirResultado(48, 8)