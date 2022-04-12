const contadorA = require('./instaciaUnica')
const contadorB = require('./instaciaUnica')

const contadorC = require('./instaciaNova')()
const constadorD = require('./instaciaNova') ()

contadorA.inc()
contadorA.inc()
console.log(contadorB)

contadorC.inc()
contadorC.inc()
console.log(constadorD)
console.log(contadorC)