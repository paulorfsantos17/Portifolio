const funcionario = {
    nome : "Maria", salario: 2500.85
}

const clone = { ativo: true , ...funcionario}

console.log(clone)

//Spread com array 

const grupoA = ['Maria', 'Joao', 'José']
const grupoB = ['Paulo' , ...grupoA, 'Rafael']

console.log(grupoB)