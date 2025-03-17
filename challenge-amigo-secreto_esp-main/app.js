    let amigos =[];


    function agregarAmigo(){
        let nombreamigo = document.getElementById("amigo");
        console.log(nombreamigo.value);
       
        if(nombreamigo.value.trim() === ""){
            alert("Por favor, inserte un nombre.");
        }else{
            amigos.push(nombreamigo.value);

            console.log(`Amigo añadido: ${nombreamigo.value}`);
            console.log(`Lista actual de amigos: ${amigos}`);

            mostrarListaAmigos();
            nombreamigo.value = "";
        }
    }

   
    function mostrarListaAmigos() {
    let listaAmigos = document.getElementById("amigos");
    listaAmigos.innerHTML = "";

        for( let i =0; i< amigos.length; i++){
        let elementoLi = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(item);
        }
    }

    function sortearAmigo(){

       if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
        }

        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`; 
    }
    