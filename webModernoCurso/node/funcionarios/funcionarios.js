const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const mulheres = f => f.genero = 'f'
const pais = f => f.pais ==='China'
const menorSalario = (func , funcAtual)=> func.salario < funcAtual.salario ? func : funcAtual
      


const funcionarios = axios.get(url).then(response => {

    const funcionarios = response.data
    console.log()

    const func = funcionarios.filter(mulheres)
        .filter(pais)
        .reduce(menorSalario)
    
    console.log(func)
    
})    

