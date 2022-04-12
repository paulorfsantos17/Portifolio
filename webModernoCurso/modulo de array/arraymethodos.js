const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Masa']
pilotos.pop()//Masa quebrou o carro denovo
console.log(pilotos)

pilotos.push('Verstabe')
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('hamilton')//insere na primeira na posição
console.log(pilotos)

//adicionar
pilotos.splice(2, 0 , 'Masa', 'Botas')
console.log(pilotos)

//remover 
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos =  pilotos.slice(2) // novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)

