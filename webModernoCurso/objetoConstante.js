// objeto constante

const pessoa = {
    nome: "José"
}


//pessoa = { nome : Maria }   isso nao pode pq vc  e uma contante e ja tem um objeto que marca um memoria

Object.freeze(pessoa) // isso nao deixa vc alterar nada dentro do objeto

pessoa.nome = "Maria"

console.log(pessoa.nome)