//Dado que accedo a la página
//Cuando ingreso los tres números
//Veo que número es el mayor

//creo constantes para recoger elementos Id del html
let mostrarResultado = document.getElementById("mostrarResultado");
let num1 = document.getElementById("num1");
let divisible = document.getElementById("divisible");
const divbotonreset = document.getElementById("resetear");

// Creo una función en la que me pinte en html si el número dado es divisible por 2,3,5 o 7, y en caso de no serlo también me indique en el html que no lo es
function numerodivisible(num) {
  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    mostrarResultado.innerHTML = "El número es divisible por 2, 3, 5 o 7";
  } else {
    mostrarResultado.innerHTML = "El número no es divisible por 2, 3, 5 o 7";
  }
}

// Creo una función para que cuando se haga click en el botón llame a la función que indica si es divisible
divisible.addEventListener("click", () => {
  //numerodivisible(num1);

  numerodivisible(num1.value);
});
// Creo una función para resetar la web

//Creo una funcion para que cuando haga click en el botón de reset
divbotonreset.addEventListener("click", () => {
  resetear();
});
function resetear() {
  window.location.reload();
}
