// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Definir primero las funciones de los botones

// agregarAmigo()
// sortearAmigo()


/* function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
} 

ParaLimpiar caja con el ID del input
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}    

*/

// defino la lista donde se guardan los elementos
const listaAmigos= [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombreIngresado = input.value.trim(); //la función trim() elimina datos en blancos innecesarios
    if (nombreIngresado){
        listaAmigos.push(nombreIngresado);
        input.value = "";
        mostrarLista();
    }   else {
        alert("Por favor ingresa un nombre")
    }
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach((listaAmigos) => {
        const li = document.createElement("li"); // esto crea un <li> (que son los elementos de una lista[ul])
        li.textContent = listaAmigos; // el li se crea con datos dentro, definido por la lista creada previamente
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Por favor, agrega nombres primero.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = amigoSeleccionado;
    resultado.appendChild(li);
}

