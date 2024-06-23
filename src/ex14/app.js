//creo constantes para recoger elementos Id del html
let mostrarResultado = document.getElementById("mostrarResultado");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let divisible = document.getElementById("divisible");
const divbotonreset = document.getElementById("resetear");

// función que al hacer click en el botón llame a la función de divisor
divisible.addEventListener("click", () => {
  let numb1 = parseInt(num1.value);
  let numb2 = parseInt(num2.value);
  divisorescomunes(numb1, numb2);
});

//función que al hacer click en el botón llame a la función de reset
divbotonreset.addEventListener("click", () => {
  resetear();
});

// función que muestra los divisores comunes de dos números dados
function divisorescomunes(number1, number2) {
  mostrarResultado.innerHTML = "";
  if (number1 >= number2) {
    for (let i = 1; i <= number1; i++) {
      if ((number1 % i === 0) & (number2 % i === 0)) {
        mostrarResultado.innerHTML += i + "<br>";
      }
    }
  }

  if (number2 > number1) {
    for (let i = 1; i <= number2; i++) {
      if (number1 % i === 0 && number2 % i === 0) {
        mostrarResultado.innerHTML += i + "<br>";
      }
    }
  }
}

//función que resetea el div donde se refleja el resultado
function resetear() {
  num1.value = "";
  num2.value = "";
  mostrarResultado.innerHTML = "";
}
