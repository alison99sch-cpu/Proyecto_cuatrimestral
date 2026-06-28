//Funciones:
//Función para validar formulario:
const formulario = document.getElementById("form")
const nombre = document.getElementById("nomb")
const email = document.getElementById("email")

formulario.addEventListener('submit', (e) => {
e.preventDefault()
validarForm()
})

function validarForm(){
    let esValido = true;
    validarNombre();
    validarNombre();

}

function validarNombre(nombre){
    if(nombre.value.trim() === " "){
        esValido = false;

    }else if(/\d/.test(nombre.value)){
        esValido = false;
    }else{
        esValido = true;
    }

}

function validarEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);

    if(email.value.trim() === " "){
        esValido = false;
    }else if(!esEmailValido(emailInput.value)){
        esValido = false;
    }else{
        esValido = true;
    }

}
