// Validación del formulario:
const nombre = document.getElementById("nomb")
const email = document.getElementById("email")
const parr = document.getElementById("advertencia")
const coment = document.getElementById("comentario")
const formulario = document.getElementById("form")

const radio = document.getElementsByName("consulta")

formulario.addEventListener("submit", e=> {

    e.preventDefault()

    let warnings = ""
    let formatoEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let ingreso = false
    parr.innerHTML = ""

    if(nombre.value.length <3) {
        warnings += `⚠️El nombre NO es valido <br>`
        ingreso = true
    }

    if(!formatoEmail.test(email.value)) {
        warnings += `⚠️El email NO es valido <br>`
        ingreso = true
    }

     if (!document.querySelector('input[name="consulta"]:checked')) {
        warnings += `⚠️Debe seleccionar en qué lo puedo ayudar <br> `
        ingreso = true
     }

     if(comentario.value.trim() === "") {
        warnings += `⚠️Debe escribir su consulta o sugerencia`
        ingreso = true
     }

    if(ingreso) {
        parr.innerHTML = warnings
    }else{
        parr.innerHTML = `Enviado con éxito! ✨`
    }
}

)
