const valores = [7, 8.1, 5, 9]

console.log(valores[0],valores[2])
console.log(valores[4])

valores[4]= 1
console.log(valores[4])

console.log(valores.length)

valores.push(null, 'teste' , { id : 3 }, false)
console.log(valores)

console.log(valores.pop())
console.log(valores)
delete valores[0]
console.log(valores)

console.log(typeof valores)