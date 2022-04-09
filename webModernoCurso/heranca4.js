function meuObjeto (){

}

console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__)

console.log(meuObjeto.prototype === obj1.__proto__)


meuObjeto.prototype.nome = "jose"
meuObjeto.prototype.falar = function(){ 

    console.log(`Meu nome é ${this.nome}`)
} 

console.log(obj1.nome)

obj2.nome = "Rafael"

console.log(obj2.nome)
const obj3 = new meuObjeto
obj3.__proto__ = meuObjeto.prototype

obj2.falar()

