let nombre = "Camilo"
let apellido = "Kensan"
let estudiante = `${nombre} ${apellido}`
console.log(estudiante)

console.log(estudiante.toUpperCase())
console.log(estudiante.toLowerCase())
let num = estudiante.length
console.log(num)

let primeraLetra=nombre[0]
console.log(primeraLetra)

let ultimaLetra=apellido[apellido.length-1]
console.log(ultimaLetra)

let estudianteSinEspacios=estudiante.replace(" ", "")
console.log(estudianteSinEspacios)

let siEsta = estudiante.includes(nombre)
console.log(siEsta)
