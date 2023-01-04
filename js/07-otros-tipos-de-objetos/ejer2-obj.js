const datosP = {
    nombre:"el comandante",
    apellido:"ronaldo",
    edad:38,
    altura:"187 cm",
    isDev:true
}

let edad1 = datosP.edad
console.log(edad1)

listaObj = [
    {...datosP},
    {nombre: "di maria", edad: 34},
    {nombre: "kuni", edad: 35}
]

const listaOrdenada = listaObj.sort((a, b)=> b.edad - a.edad)

console.log(listaOrdenada)

