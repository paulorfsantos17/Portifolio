const { set } = require("lodash")

for (let letra of 'Cod3r' ){
    console.log(letra)
}

const assunstosEcma = ['Set' , 'Map', 'Promises']

for (let assunto of assunstosEcma) {
    console.log(assunto)
}

const assuntosMap =  new Map([
    ['Set', {abordado : true}],
    ['Map', {abordado : true}],
    ['Promisses', {abordado : false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let assunto of assuntosMap.keys()) {
    console.log(assunto)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for ( let [ch , vl] of assuntosMap.entries() ){
    console.log(ch , ':' , vl  )
}

const s = new Set(["a", "b", "c"])

for (let letra of s) {
    console.log(letra)
}