//Usando a forma literal
const obj1 = {

}

//OBJECT EM JS
const obj = new Object


//funcoes contrutoras

function Pessoa(nome, idade, mae) {

    this.nome
    this.getNomeMae = () => {
        return mae
    }
}

const p1 = new Pessoa('Paulo', 23, "Emilia")
const p2 = new Pessoa('Carina', 21, "Emilia Gilmara")


console.log(p2.getNomeMae())


//funcoes factory

function criarFuncionario( nome , salarioBase , faltas){
    return {
        nome, 
        salarioBase, 
        faltas, 
        getsalarios() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Paulo', 2000 , 2)
const f2 = criarFuncionario('Maria' ,  2200 , 1)
console.log(Math.floor(f1.getsalarios()),Math.floor(f2.getsalarios()))

//Object.creator
const filha = Object.create(null)
filha.nome = "Maria"
console.log(filha.nome)

//Funcao que converte um JSON em objeto Json.parse
const infoJson = JSON.parse('{"info": "Eu sou um Json"}')

console.log(infoJson.info)