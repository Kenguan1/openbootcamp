function func(){
    return true
}
console.log(func())


async function laPromesa(){
    return setTimeout(() => console.log("hola soy una promesa"), 5000) //no maneja valores entonces por eso () está vacio
}
laPromesa() //se demora 5 segundos en ejecutarse


function* generadoraPares(){
    let i = 0
    while(true){
        yield i += 2
    }
}

let idg = generadoraPares()
// probando generador 
console.log(idg.next().value)
console.log(idg.next().value)
console.log(idg.next().value)

