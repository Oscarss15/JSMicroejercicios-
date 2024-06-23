//Dado que accedo a la página
//Cuando relleno el formulario y lo valido
//Veo el texto con el nombre de usuario dado en el formulario

//creo constantes para recoger elementos Id del html
const text = document.getElementById("text");
const divtexto = document.getElementById("mostrarTexto");
const divboton = document.getElementById("validar");

//Creo función para cuando se haga click en el botón y llamo a la función que comprueba si esta vacío o no
divboton.addEventListener('click', () =>{

    comprobacion()
        
})

//Creo una función donde recoge el valor de el input text y me lo muestra en el div creado para mostrar el texto
function showText() {
    let mostrar = text.value;
    divtexto.innerHTML = "Hola "+mostrar;
  }

//Creo una función que compruebe si el campo esta vacío o no, si está vacio muestro una advertencia en pantalla y si no lo está llamo a la función que muestra el nombre de usuario
  function comprobacion(){
    const length = text.value.length;

    if(length===0){
        window.alert("El campo esta vacio");
    }else{
        showText();
    }
  }