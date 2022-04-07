let notas = [1, 2.5, 8, 15, 16]

for (let i   in notas ){
    console.log(i, notas[i])

}

const pessoa = {
        nome: "Paulo",
        Idade: 15,
        cidade: "cachoeira de minas"
}

for ( let atributos in pessoa){
    console.log(`${atributos}  = ${pessoa[atributos]}`)
}

console.log(atributos)