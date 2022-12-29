let compra = ["papaya", "limon", "fresa", "aguacate", "maní"]
compra.push("Aceite de Girasol")
console.log(compra)
compra.pop()
console.log(compra)

const listaPelis = [
    {titulo: "cars1",
    director: "El bicho",
    fecha: new Date(2006, 5, 22)},

    {titulo: "cars2",
    director: "El insecto",
    fecha: new Date(2011, 5, 24)},

    {titulo: "cars3",
    director: "El comandante",
    fecha: new Date(2017, 5, 16)}
]

console.log(listaPelis)

// Nueva lista con las pelis después de 2010
listaNueva = listaPelis.filter(peli => peli.fecha > new Date(2010, 0, 1))
console.log(listaNueva)

// Nueva lista solo con los directores
listaDir = listaPelis.map((pelis)=> `${pelis.director}`)
console.log(listaDir)

// Otra forma
listaDirectores = listaPelis.map(pelis =>{
    return pelis.director
})
console.log(listaDirectores)

// Lista con solo titulos
listaTitulos = listaPelis.map((pelis)=> {
    return pelis.titulo
})
console.log(listaTitulos)

//Lista de directores y los titulos
listaDiryTitulos = listaDir.concat(listaTitulos)
console.log(listaDiryTitulos)

listaDiryTitulos2 = [...listaDir, ...listaTitulos]
console.log(listaDiryTitulos2)
