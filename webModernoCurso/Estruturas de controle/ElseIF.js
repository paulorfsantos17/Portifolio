Number.prototype.entre = function(inicial , final ) {
     return this <= final && this >= inicial
}

const imprimirResultado = function(nota) {
    if(nota.entre(9, 10)){
        console.log("Quadro de Honra")
    }else if (nota.entre(7, 8.99)){
        console.log("Aprovado")
    } else if(nota.entre(4 ,6.99)){
        console.log("Recuperação")
    } else if(nota.entre(0 , 3.99)){
        console.log("Reprovado")
    } else {
        console.log("Nota Inválida")
    }


}


imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(6.25)
imprimirResultado(3)
imprimirResultado(-2)
imprimirResultado(18)
imprimirResultado(8.99)
imprimirResultado(8.5555)
imprimirResultado(8.9993)