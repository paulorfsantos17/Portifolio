//formas de declarar e usar função em javascript

//literal
function fun1 (){
    console.log('função literal')
}

//anonima em constantes

const fun2= function(){
        return 'função em constrante'
}

//armazenando em arrary

const array= [function (a , b) {return a + b}, fun2 , fun1]
console.log(array[0](5, 6))
console.log(array[1]())
console.log(array[2]())

//funcao em objetos

const obj = {}
obj.falar = () => "Opa"
console.log(obj.falar())

// funcao como paramentro

function run(fun){
    fun()
}

run(()=> console.log("função como paramentro"))

//funcao pode retornar uma funcao

const soma= function(a , b){
    return (c) => console.log(a + b + c)  
}

soma(5,6)(7)
//outra forma de chamar essa funcao
const somaPrimeiro = soma(5, 6)
somaPrimeiro(3)

