// armazenando uma funcao dentro de uma variavel

const imprimirSoma = function (a , b) {
    console.log(a + b)
}

imprimirSoma( 2 , 3)


//funcao arrow
const soma = (a , b ) => {
    return a + b
}

console.log(soma(1 , 5))

//retorno impricito

const subtracao = (a , b) => a  - b

console.log(subtracao(5 , 1))