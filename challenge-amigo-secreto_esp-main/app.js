    let amigos =[];
    function agregarAmigo(){
        let nombreamigo = document.getElementById("amigo");
        let nombre = nombreamigo.value.trim();
        console.log(nombre);
    
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
        } else if (nombreRepetido(nombre)) {  // Verificación de nombre duplicado
            alert("Este nombre ya está en la lista. Por favor, ingrese un nombre diferente.");
            limpiarCaja();
        } else {
            amigos.push(nombre);
            alert(`Amigo añadido: ${nombre}`);
            limpiarCaja();
            document.getElementById("resultado").innerHTML = (`Lista actual de amigos: ${amigos}`);
            mostrarListaAmigos();
        }
    }

   
    function mostrarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

        for( let i =0; i< amigos.length; i++){
        let elementoLi = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(elementoLi);
        }
    }

    function sortearAmigo(){

       if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
        }

        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById("listaAmigos").innerHTML = `El amigo sorteado es: ${amigoSorteado}`; 
    }
    
    function limpiarCaja(){
        document.querySelector('#amigo').value = '';
    }

    function nombreRepetido(nombre) {
        return amigos.includes(nombre.trim());
    }