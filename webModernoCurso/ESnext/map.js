const tecnologias = new Map()
tecnologias.set('react' , {framework : false})
tecnologias.set('Angular' , {framework :true})

console.log(tecnologias.get('react'))
console.log(tecnologias.react)

const chaveVariadas = new Map([
    [function() {} ,'funcao'],
    [{}, 'objeto'],
    [123 , 'numero']
])

chaveVariadas.forEach((vl, chave) => {
    console.log(vl,':' , chave)
})

console.log(chaveVariadas.has(123))
chaveVariadas.delete(123)
console.log(chaveVariadas.has(123))
console.log(chaveVariadas.size)

chaveVariadas.set(123 , 'a')
chaveVariadas.set(123 , 'b')
chaveVariadas.set(456 , 'b')

console.log(chaveVariadas)
