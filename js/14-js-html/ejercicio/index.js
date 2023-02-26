// Primer codigo
const boton = document.querySelector("#boton1")

boton.addEventListener("click", ()=> alert("CLICK EN EL BOTÓN"))


// Segundo codigo
$("#boton1").click(()=>{
    // alert("CLICK EN EL BOTÓN")
    console.log("hola estoy usando jQuery")
})


// Los 2 codigos pueden hacer lo mismo pero el segundo utiliza jQuery (necesita que se importe el script de jquery en el html)


