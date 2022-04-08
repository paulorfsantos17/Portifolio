const notas = [7.5, 8.3, 9.5, 9, 6]

let notasBaixa = []

for (let i in notas) {
    if( notas[i] < 7){
        notasBaixa.push(notas[i])
    }
}

console.log(notasBaixa)

notasBaixa = notas.filter( nota => nota < 7 )
console.log(notasBaixa)

