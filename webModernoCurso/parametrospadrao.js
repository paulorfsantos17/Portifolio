const soma = (a , b , c) => {
    a= a || 1
    b= b || 1
    c= c || 1

    return a + b + c

}

console.log(soma() , soma(1 , 3 , 4), soma('texto', 2 , 3))

const soma2 = function( a, b, c) {
    
        a = a !== undefined ? a : 1
        b = 1 in arguments ? b : 1
        c = isNaN(c) ? 1 : c

        return a + b + c
}



console.log(soma2() , soma2(1 , 3 , 4), soma2('texto', 2 , 3), soma2(0 , 0 , 0))

function  soma3( a = 1, b = 1 , c = 1) {
     return a + b + c
}

console.log(soma3() , soma3(1 , 3 , 4), soma3(3, 2 , 3), soma3(1 , 0 , 0))



