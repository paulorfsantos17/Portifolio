const alunos = [
    { nome : "João", nota : 7.1, bolsista : false},
    { nome : "Maria", nota : 9.2, bolsista : true},
    { nome : "Pedro", nota : 8.2, bolsista : false},
    { nome : "Ana", nota : 8.7, bolsista : true},
]

const temBolsa = a => a.bolsista

const todosTemBolsa = alunos.map(temBolsa).reduce(function(acumulador , atual) {

    return acumulador === true 

})

console.log(todosTemBolsa)

const temBolsista = alunos.map(temBolsa).reduce(function(acumulador, atual){
    return  acumulador || atual 

})

console.log(temBolsista)
