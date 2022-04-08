function carro ( velocidadeMaxima = 200 , delta = 5) {
    //atributo privado
    let velociadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if ( (velociadeAtual + delta) <= velocidadeMaxima){
            velociadeAtual += delta
        } else {
            velociadeAtual = velocidadeMaxima
        }

    }


    this.getVelocidadeAtual =  () => velociadeAtual
   
          
  
}

const Uno = new carro

Uno.acelerar()
console.log(Uno.getVelocidadeAtual())

const Ferrari = new carro(350 , 20)

Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()

console.log(Ferrari.getVelocidadeAtual())



