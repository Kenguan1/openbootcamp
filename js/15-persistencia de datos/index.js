const nombre="Eduardo"
const apellido="Silva"

const persona1 = {
    nombre,
    apellido
}

//sessionStorage.setItem("persona1", JSON.stringify(persona1))
//localStorage.setItem("persona1", JSON.stringify(persona1))

const now = new Date()
// cookies que se borran en 2 min

//document.cookie = `persona1=${JSON.stringify(persona1)};expires=${new Date(now.getTime() + 2 * 60000)}`
console.log(document.cookie)
