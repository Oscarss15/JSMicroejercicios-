//Dado que accedo a la página
//Cuando relleno el formulario y lo valido
//Veo el texto con el nombre de usuario dado en el formulario

//creo constantes para recoger elementos Id del html, para introducir todas las vocales y para inicializar los contadores de las vocales
const text = document.getElementById("text");
const divtextoa = document.getElementById("mostrarTextoa");
const divtextoe = document.getElementById("mostrarTextoe");
const divtextoi = document.getElementById("mostrarTextoi");
const divtextoo = document.getElementById("mostrarTextoo");
const divtextou = document.getElementById("mostrarTextou");
const divboton = document.getElementById("validar");
const divbotonreset = document.getElementById("resetear");
const vocales = "aeiouáéíóúü";
let conta = 0;
let conte = 0;
let conti = 0;
let conto = 0;
let contu = 0;

//Creo función para cuando se haga click en el botón y llamo a la función que comprueba si esta vacío o no
divboton.addEventListener("click", () => {
  comprobacion();
});
//Creo función para cuando se haga click en el botón y llamo a la función para resetear la página

divbotonreset.addEventListener("click", () => {
  resetear();
});

//Creo una función que compruebe si el campo esta vacío o no, si está vacio muestro una advertencia en pantalla y si no lo está llamo a la función showText
function comprobacion() {
  const length = text.value.length;

  if (length === 0) {
    window.alert("El campo esta vacio");
  } else {
    showText();
  }
}

//Creo una función donde recoge el valor de el input text y llama a la funcion contarvocales
function showText() {
  var mostrar = text.value;

  contarvocales(mostrar);
}

/* Creo una función en la que  recorrro con un for una cadena de texto, paso a minuscula cada letra y le digo
  que me vaya sumando a los contadores un número si encuentra cada vocal en cada letra del texto recorrido, para luego pintarlo en el html*/
function contarvocales(infotexto) {
  for (let i = 0; i < infotexto.length; i++) {
    const letra = infotexto[i].toLowerCase();

    if (letra === "a") {
      conta++;
      divtextoa.innerHTML = "Este texto contiene " + conta + " A";
    } else if (letra === "e") {
      conte++;
      divtextoe.innerHTML = "Este texto contiene " + conte + " E";
    } else if (letra === "i") {
      conti++;
      divtextoi.innerHTML = "Este texto contiene " + conti + " I";
    } else if (letra === "o") {
      conto++;
      divtextoo.innerHTML = "Este texto contiene " + conto + " O";
    } else if (letra === "u") {
      contu++;
      divtextou.innerHTML = "Este texto contiene " + contu + " U";
    } else if (conta===0 && conte===0 && conti===0 && conto===0 && contu===0){
      divtextoa.innerHTML = "Este texto no contiene vocales";
    }
  }

  conta = 0;
  conte = 0;
  conti = 0;
  conto = 0;
  contu = 0;
}

//Creo función para resetear la página
function resetear() {
  window.location.reload();
}
