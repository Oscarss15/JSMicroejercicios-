//Dado que accedo a la página
//Cuando relleno el formulario y lo valido
//Veo el texto con el nombre de usuario dado en el formulario

//creo constantes para recoger elementos Id del html
const text = document.getElementById("text");
const divtexto = document.getElementById("mostrarTexto");
const divboton = document.getElementById("validar");
let cont=0;
const letraa = "a";
const letraA = "A";

//Creo función para cuando se haga click en el botón y llamo a la función que comprueba si esta vacío o no
divboton.addEventListener('click', () =>{

    comprobacion()
   
        
})

//Creo una función que compruebe si el campo esta vacío o no, si está vacio muestro una advertencia en pantalla y si no lo está llamo a la función showText
function comprobacion(){
  const length = text.value.length;

  if(length===0){
      window.alert("El campo esta vacio");
  }else{
      showText();
  }
}

//Creo una función donde recoge el valor de el input text y llama a la funcion contarletra
function showText() {
    let mostrar = text.value;
    contarletra(mostrar);
  }

  //Creo una función en la que paso una cadena de texto y recorre esa cadena para contar la cantidad de una letra específica, una vez contadas las muestra en el div perteneciente al html
  function contarletra(infotexto){
    for (let i = 0; i < infotexto.length; i++) {
      
      if (infotexto[i] === letraa) {
          cont++;
      }
      if (infotexto[i] === letraA) {
        cont++;
    }
      }
      divtexto.innerHTML = "Esta frase contiene la letra a "+ cont + " veces";
      cont=0;
  }

