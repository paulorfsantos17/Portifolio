const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corintians').add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Corintians')
console.log(times.has('Corintians'))

const nomes = ['Paulo', 'Lucas' , 'Maria', 'Lucas']

const nomeSet = new Set(nomes)
console.log(nomeSet)