 Object.prototype.atri0 = 'z'
 const avo = {atri1 : "A"}
 const pai = {__proto__ : avo, atri2 : "B"}
 const filho = {__proto__ : pai, atri3 : "c"}

 console.log(filho.atri1)
 console.log(filho.atri0)


 const carro ={
     velAtual : 0,
     velMaxima : 200,
     acelerarMais(delta){
         if(this.velAtual < this.velAtual ){
             return this.velAtual++
        }else {
            return this.velAtual = this.velMaxima
        }
    },
    status(){
        return `${this.velAtual} km/h de ${this.velMaxima} km/h`
    }
 }

 const ferari = {
    modelo: "F40",
    velMaxima : 340 //shadowing
 }

 const volvo = {
     modelo : "V40",
     status (){
         return `${this.modelo}: ${super.status()} `
     }
 }

 Object.setPrototypeOf(ferari , carro) 
 Object.setPrototypeOf(volvo , carro)

 console.log(ferari)
 console.log(volvo)

 volvo.acelerarMais(100)
 console.log(volvo.status())

 ferari.acelerarMais(300)
 console.log(ferari.status())
