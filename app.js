//Buscador:
const generosDeco = [
    {
    nombre: "Minimalista",
    descripcion: "Líneas finas, puntos simples, figuras geométricas básicas y mucho espacio negativo sobre bases transparentes o nude."
    },
    {
    nombre: "Y2k",
    descripcion: "Diseños inspirados en los años 2000 con brillos, mariposas, corazones, estrellas pixeladas y colores vibrantes o neón."
    },
    {
    nombre: "Coquette",
    descripcion: "Estética hiperfemenina caracterizada por el uso de tonos pastel, moños, perlas, encajes y detalles románticos."
    },
    {
    nombre: "Francesa moderna",
    descripcion: "Variaciones de la manicura clásica que usan colores brillantes, puntas dobles, formas diagonales o acabados metalizados."
    },
    {
    nombre:"Gotico",
    descripcion: "Gótico: Destaca por su estética oscura, dramática y sofisticada, inspirada en elementos del misticismo, la era victoriana y la cultura punk o alternativa."
    },
    {
    nombre:"Gótico",
    descripcion: "Destaca por su estética oscura, dramática y sofisticada, inspirada en elementos del misticismo, la era victoriana y la cultura punk o alternativa."
    }
]

const contInput = document.getElementById("buscador");
const resultado = document.getElementById("resultado");



function buscarGen() {
    const busqueda = contInput.value.toLowerCase().trim();

    resultado.innerHTML = "";

    if (busqueda === ""){
        return;
    }


    const generosFiltro = generosDeco.filter(genero => 
        genero.nombre.toLowerCase().includes(busqueda)
    );
     
    if (generosFiltro.length === 0) {
        resultado.innerHTML = 'Lo sentimos, no se encontraron resultados para su búsqueda :(';
        return;
    }

    generosFiltro.forEach((genero)=> {
        const div = document.createElement("div");
        div.className = "result"
        div.textContent = genero.nombre;
        

        div.addEventListener("click", 
            mostrarDescrip(genero))
        
        resultado.appendChild(div);
    }
    );
}

function mostrarDescrip(genero) {
    resultado.innerHTML = `
        <div class="descripcion-activa">
            <h3>${genero.nombre}</h3>
            <p>${genero.descripcion}</p>
        </div>
    `;
}


contInput.addEventListener("input", buscarGen)


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

// Lista de ideas personal del usuario:
const ideas = []

function agregarIdeas() {
    try {
        const input = document.querySelector("#ideas").value.trim();
        if(input === ""){
            throw new Error("Por favor, ingresa un dato válido!")
        }
        if(ideas.includes(input)){
            throw new Error("Ups! Esa idea ya existe en la lista!")
        }
         ideas.push(input)
         mostrarIdeas()

    } catch(error) {
         alert(error.message)

    }

}

function mostrarIdeas() {
    const listaList = document.getElementById("lista")
    listaList.innerHTML = ""

    for(let idea of ideas) {
        const li = document.createElement("li")
        li.textContent = idea
        listaList.appendChild(li)

    }
    document.getElementById("ideas").value = ""
}

document.getElementById("agregar").addEventListener("click", agregarIdeas)
document.getElementById("ideas").addEventListener("keypress", event => {
    if(event.key === "Enter") {
        agregarIdeas();
    }
})

//Carrousel de imagenes:
const imagenes = document.getElementById("imagenes")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")


let indice = 0;
const totalImagenes = 5

function actualizarCarrusel(){
    imagenes.style.transform = `translateX(-${indice * 100}%)`
    }

prevBtn.addEventListener("click", () =>{
    indice = (indice - 1) % totalImagenes;
    actualizarCarrusel();
});

nextBtn.addEventListener("click", () =>{
    indice = (indice + 1) % totalImagenes;
    actualizarCarrusel();
});

actualizarCarrusel();

