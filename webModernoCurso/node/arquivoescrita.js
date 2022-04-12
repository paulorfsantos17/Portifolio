const fs = require('fs')

const celular = {
    nome: "celular",
    preco : 1259.00,
    desconto : 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(celular),(err => {
    console.log(err || "Arquivo Salvo")
}))