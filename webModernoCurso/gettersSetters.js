const sequencia = {
    _valor : 1,

    get valor() {return this._valor++},
    set valor(valor){
      if(valor > this.valor) {
          this.valor = valor
      } else {
          console.log("valor Precisa ser maior")
      }

    }

}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 800

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 700