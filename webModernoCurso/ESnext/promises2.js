let a = 1

let p = new Promise(function (resolve){
     resolve(['Ana', 'José' , 'Paulo', 'Maria'])

})

function arrayOuString(array) {
    return array[0]
}

function letraMinuscula(letra) {
    return letra.toLowerCase()
}
p.then(arrayOuString)
.then(arrayOuString)
.then(letraMinuscula)
.then(console.log)