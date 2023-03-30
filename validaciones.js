const nombre = document.getElementById("name_curso")
const levels = document.getElementById("levels")
const precio = document.getElementById("precio")
const categoria = document.getElementById("categoria")
const description = document.getElementById("description")
const forms = document.getElementById("forme")
const parrafo = document.getElementById("Warning")
const curso = document.getElementById("cursos")



forms.addEventListener("submit", e=>{
    e.preventDefault()
    if(nombre.value.length == 0 || levels.value.length == 0
        || precio.value.length == 0 || categoria.value.length == 0
        || description.value.length == 0){
        alert("No dejes campos sin llenar")
    }
    if(curso.value.length == 0){
        alert("No te olvides de subir tu video")
    }
})

