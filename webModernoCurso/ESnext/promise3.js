function gerarNumeroEntre(min, max){
    if(min > max) {
        [min, max]=[max, min]
     
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio =parseInt(Math.random()  * fator) +  min
        resolve(aleatorio)
    })

}

gerarNumeroEntre(1, 30)
    .then(numero => numero * 10)
    .then(numerox10 => `O numero sorteado multiplicado por 10 é ${numerox10}`)
    .then(console.log)