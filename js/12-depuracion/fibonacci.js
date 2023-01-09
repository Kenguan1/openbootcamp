function Fibonacci(num) {
    if (num === 1) return [1] 
    if (num === 2) return [1, 1]
    let lista = [1, 1] //regla: fibonacci siempre empieza con dos 1
    for (let i = 2; i < num; i++) { //parte desde la pos 2 ya que los primeros 2 numeros [0,1] siempre serán 1
        lista.push(lista[i - 1] + lista[i - 2]) // para obtener un nuevo numero en la serie de fibonacci se suman las 2 posiciones anteriores
    }
    return lista
}

console.log(Fibonacci(6))

// fibonacci = [1,1,2,3,5,8,13,21]
// nuevoFibo=[]

// function fibo(num){
//     for (let i=0; i<num; i++){
//         nuevoFibo.push(fibonacci[i])
//     }
//     return nuevoFibo
// }
// const prueba1 = fibo(5)
// console.log(prueba1)
