const pai = { nome : 'Pedro', corCabelo :'loiro'}

const filha = Object.create(pai)
filha.nome = 'Maria'

console.log(filha.corCabelo)

const filha2 = Object.create(pai, {
    nome : {value : "bia", writable: false, enumerable : true }
})

console.log(filha2.nome)
filha2.nome ="Carla" 
console.log(filha2.nome , filha2.corCabelo)

console.log(Object.keys(filha))
console.log(Object.keys(filha2))

for( key in filha2 ){
    filha2.hasOwnProperty(key) ?
    console.log(key) :  console.log(`por herança ${key}`)
}