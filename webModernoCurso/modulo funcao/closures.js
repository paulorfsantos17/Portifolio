const x = "Global"

function Fora (){
    const x = "local"
    function Dentro(){
        return x
    }

    return Dentro()
}

 let minhafuncao = Fora()

console.log(minhafuncao)