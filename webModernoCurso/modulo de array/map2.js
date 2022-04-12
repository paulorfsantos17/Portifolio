const carrinho = [
    '{"nome": "Borracha" , "preco": 3.45}',
    '{"nome": "Caderno" , "preco":  13.90}',
    '{"nome": "Kit de Lápis" , "preco":  41.22}',
    '{"nome": "Caneta" , "preco":  7.50}'

]

let paraObjeto = json => JSON.parse(json)
let preco  = produto => produto.preco

resultado =  carrinho.map(paraObjeto).map(preco)

console.log(resultado)