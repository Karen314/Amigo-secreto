// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo(){
    let a = document.getElementById("amigo").value;
    if (a == ""){
        alert("Por favor, ingresa un nombre");
    }else{
        if (amigos.includes(a)) {
            alert("El nombre ya está en la lista, por favor ingresa otro nombre diferente");
        } else{
            amigos.push(a);
            mostrarListaAmigos();
            console.log(amigos);
            limpiar("amigo");
            document.getElementById("resultado").innerHTML = "";
        }

    }
}

function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
    for (let i=0; i<amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    if (amigos.length ===0){ 
    alert("No hay suficientes amigos en la lista para sortear, por favor agrega amigos primero.");
    return;
    }
    document.getElementById("listaAmigos").innerHTML = "";
    let indice = Math.floor(Math.random()*amigos.length);
    let amigo = amigos[indice];
    document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigo}`;
    amigos.splice(indice, 1); // Elimina el amigo sorteado de la lista
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML += "<br>No quedan más amigos para sortear.";
    }return

}


function limpiar(elemento) {
    document.getElementById(elemento).value ="";
}
mostrarListaAmigos()