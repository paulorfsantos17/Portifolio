function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

aula1 = new Aula("Bem Vindo", 1)
aula2  = new Aula("Até breve", 458)

console.log(aula1, aula2)

//simulando o new

function novo(f , ...paramns){
    obj = {},
    obj.__proto__ = f.prototype,
    f.apply(obj, paramns)

    return obj
}

const aula3 = novo(Aula, "Aula 3", 3)

console.log(aula3)
