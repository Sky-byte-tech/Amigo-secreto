let nombres = [];

function agregarAmigo() { // Se renombra para coincidir con el HTML
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    nombres.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Se corrige el id
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let ganador = nombres[indiceAleatorio];
    
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>El amigo secreto es: <strong>${ganador}</strong></li>`; // Se corrige la estructura para una lista
}

