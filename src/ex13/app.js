//creo constantes para recoger elementos Id del html
let mostrarResultado = document.getElementById("mostrarResultado");
let num1 = document.getElementById("num1");
let divisible = document.getElementById("divisible");
const divbotonreset = document.getElementById("resetear");

// función que al hacer click en el botón llame a la función de divisor
divisible.addEventListener("click", () => {
  let num = parseInt(num1.value);
  divisores(num);
});

//función que al hacer click en el botón llame a la función de reset
divbotonreset.addEventListener("click", () => {
  resetear();
});

// función que muestra los divisores de un número dado
function divisores(num) {
  mostrarResultado.innerHTML = "";
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      mostrarResultado.innerHTML += i + "<br>";
    }
  }
}

//función que resetea el div donde se refleja el resultado
function resetear() {
  num1.value = "";
  mostrarResultado.innerHTML = "";
}
