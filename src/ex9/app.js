//Dado que accedo a la página
//Cuando relleno el formulario y lo valido
//Veo el texto con el nombre de usuario dado en el formulario

//creo constantes para recoger elementos Id del html y para introducir todas las vocales
const text = document.getElementById("text");
const divtexto = document.getElementById("mostrarTexto");
const divboton = document.getElementById("validar");
const vocales = "aeiouáéíóúü";
let cont=0;

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

//Creo una función donde recoge el valor de el input text y llama a la funcion contarvocales
function showText() {
    var mostrar = text.value;
    
    contarvocales(mostrar);
    
  }

  /* Creo una función en la que  recorrro con un for una cadena de texto, paso aminuscula cada letra y le digo
  que si esta incluida en la variable donde tengo guardadas las vocales sume 1 al contador, una vez recorrido el for pinto en el div perteneciente al html el número de vocales que hay */
  function contarvocales(infotexto){
    
   
    for (let i = 0; i < infotexto.length; i++) {
        const letra = infotexto[i].toLowerCase();
        if (vocales.includes(letra)) {
           cont++;
          
        }
      }
      
        divtexto.innerHTML = "Este texto contiene "+ cont+" vocales";
        cont=0;
        
  }
 