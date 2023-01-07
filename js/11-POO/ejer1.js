class Estudiante {
   nombre = "Juanito"
   asignaturas = ["Javascript", "HTML", "CSS"]
    
   obtenDatos(){
        return {
            nombreeeee: this.nombre, //siempre que queramos acceder a un atributo dentro de la clase tenemos que poner this.atributo, aquí normalmente sería el this = , pero acá creamos el nombre desde adentro de la misma clase
            asignaturasssss: this.asignaturas
        }
    }
}

const estudiante1 = new Estudiante()
console.log(estudiante1.obtenDatos())



// const crearEstudiante = (nombre, asignaturas) =>{
//     return {
//         nombre,
//         asignaturas,
//     }
// }

// const nuevoEstu = crearEstudiante("emilio", ["aaa", "bbb", "ccc"])
// console.log(nuevoEstu)
