const pessoa = {
    nome: "Paulo",
    idade: 15,
    peso: 50
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach((e) => {
console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave , valor]) => {
    console.log(`${chave}: ${valor}`)
    })

    Object.defineProperty(pessoa, 'dataNascimento',{ 
        enumerator: true,
        writable: false,
        value : "17/10/1998"
    })


    pessoa.dataNascimento = "17/10/2000"
    console.log(pessoa.dataNascimento)

    //Object.assign ES6 ECM 2015

    const dest = { a: 1 }
    const a = { b: 2}
    const b ={ c: 3}

    Object.assign(dest, a, b)

    console.log(dest)

    Object.freeze(a)
    a = {d: 35}
    //console.log(a)
    