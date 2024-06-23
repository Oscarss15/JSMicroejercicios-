//creo constantes para recoger elementos Id del html
let mostrarResultado = document.getElementById("mostrarResultado");
let num1 = document.getElementById("num1");
let divisible = document.getElementById("divisible");
const divbotonreset = document.getElementById("resetear");
let cont = 0;

// función que al hacer click en el botón llame a la función de esPrimo
divisible.addEventListener("click", () => {
  let num = parseInt(num1.value);
  esPrimo(num);
  cont = 0;
});

//función que al hacer click en el botón llame a la función de reset
divbotonreset.addEventListener("click", () => {
  resetear();
});

// función que muestra si un número es primo
function esPrimo(num) {
  mostrarResultado.innerHTML = "";
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      cont++;
    }
    if (cont > 2) {
      mostrarResultado.innerHTML = "El numero no es primo";
    } else {
      mostrarResultado.innerHTML = "El numero  es primo";
    }
  }
}

//función que resetea el div donde se refleja el resultado
function resetear() {
  num1.value = "";
  mostrarResultado.innerHTML = "";
}
