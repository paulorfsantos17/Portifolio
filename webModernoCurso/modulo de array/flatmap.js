const escola = [{
    nome: 'Turma M1',
    alunos : [{
        nome: 'Gustavo',
        nota : 8.1
    }, {
        nome : 'Ana', 
        nota : 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome : "Rebeca",
        nota :8.9
    },{
        nome : "Roberto",
        nota : 7.3
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const nota1 = escola.map(getNotasDaTurma)
console.log(nota1[0].concat(nota1[1]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([] , this.map(callback))
}

const nota2 = escola.flatMap(getNotasDaTurma)

console.log(nota2)

console.log([].concat( [ 8.1, 9.3 ], [ 8.9, 7.3 ] ))

