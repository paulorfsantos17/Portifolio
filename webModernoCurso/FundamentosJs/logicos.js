function compras(trabalho1 , trabalho2){
        const comprarSorvete = trabalho1 || trabalho2
        const comprartv50 = trabalho1 && trabalho2     
        //const comprartv32 = !!(trabalho1 ^ trabalho2) //bitwise xor 
        const comprartv32= trabalho1 =!  trabalho2
        const manterSaudavel = !comprarSorvete

        return {
            comprarSorvete,
            comprartv50, 
            comprartv32, 
            manterSaudavel
        }
}

console.log(compras(true , false))

