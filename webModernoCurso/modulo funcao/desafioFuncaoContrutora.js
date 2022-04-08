function Pessoa(nome){

     this.nome = nome

    this.falar = () =>  nome

}

const pessoa1  = new Pessoa('paulo')

console.log(pessoa1.falar())
