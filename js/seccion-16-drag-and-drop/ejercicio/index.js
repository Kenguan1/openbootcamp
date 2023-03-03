const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelector(".canasta")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event=>{
        parrafo.classList.add("dragging")

        event.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", ()=>{
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event=>{
        event.preventDefault()
    })

    seccion.addEventListener("drop", event=>{
        const id_parrafo= event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})


//Siempre que se vaya a usar drop se debe hacer esto con dragover antes para evitar problemas
papelera.addEventListener("dragover", event =>{  
    event.preventDefault();
    
    papelera.classList.add("animacion") // para la animacion de la canasta
})


papelera.addEventListener("drop", event =>{
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})


// Para la animacion de la canasta también:
papelera.addEventListener("dragleave", ()=>{
    papelera.classList.remove("animacion")
})

//dragend solo se activa cuando el arrastre se completa, es decir, no serviría en este caso, acá se usa dragleave que se activa cuándo el eemento arrastrado sale del área de la canasta
