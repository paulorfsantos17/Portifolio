class Lancamento  {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome,
        this.valor= valor
    }
}

class  cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes,
        this.ano = ano,
        this.lancamentos = []
    }

    addLacamentos (...lancamentos){

        lancamentos.forEach(l => this.lancamentos.push(l))
        
    }


    sumario () {
        let valorConsolidado = 0

        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento("Salario" , 45000)
const contaLuz =  new Lancamento("Conta de luz", -500)

const contas = new cicloFinanceiro(6, 2018)

contas.addLacamentos(salario, contaLuz)

console.log(contas.sumario())

