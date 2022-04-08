const pessoa = {
    saudacao : "Bom Dia!",
    falar () {
        console.log(this.saudacao)
    }

}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradigma entre funcional e OO

falarDePessoa = pessoa.falar.bind(pessoa) 
falarDePessoa()