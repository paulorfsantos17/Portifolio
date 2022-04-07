const peso1 = 1.0
const peso2 = Number('3.51')

console.log(peso1 , peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 8.782

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString())



console.log(Number.isInteger(media.toString))
console.log(media.toString(2))// transforma em binario
console.log(typeof Number)
