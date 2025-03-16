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
            nombreamigo.value = "";
        }
    }
