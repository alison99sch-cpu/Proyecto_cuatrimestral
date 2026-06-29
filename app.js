// Lista de ideas para decoración:

const ideasDeco = [
    "Flores pequeñas", 
    "Rosas", 
    "Margaritas",
    "Mariposas", 
    "Mariquitas", 
    "Puntos", 
    "Líneas", 
    "Formas geometrícas",
    "Stickers",
    "Perlas",
    "Piedras de strass",
    "Polvo aurora/perlado",
    "Polvo de hadas"
]

function mostarIdeasDeco() {
    const lista = document.getElementById("list")
    lista.innerHTML = ""

    for (let idea of ideasDeco) {
        const item = document.createElement("li");
        item.textContent = idea; 

        lista.appendChild(item); //Agrega el elemento li al ul

    }
}


document.getElementById("mostrar").addEventListener("click", () =>
{
    const elemento = document.querySelector("#list");
    if(elemento.style.display === 'none'){
        elemento.style.display = 'block'
    }else{
        elemento.style.display =  'none'
    }
}
);

document.getElementById("mostrar")
.addEventListener("click", mostarIdeasDeco());



//Buscador:
const buscador = [
    "Esmaltado semipermanente",
    "Paso 1",
    "Tips y consejos",
    "Flores pequeñas"
]

function buscarEnPagina() {
    const texto = document.getElementById("buscador").value.toLowerCase();

    const encontrado = buscador.some(busqueda => busqueda.toLowerCase() === texto)
    const resultado = document.getElementById("resultado")

    if (encontrado) {
        resultado.textContent = "Se ha encontrado..."
    } else {
        resultado.textContent = "Lo sentimos, no se han encontrado resultados :("
    }
}

document.getElementById("buscar").addEventListener("click", buscarEnPagina())

