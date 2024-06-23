

//creo constantes para recoger elementos Id del html


let mostrarResultado2 = document.getElementById("mostrarResultado2");
let mostrarResultado3 = document.getElementById("mostrarResultado3");
let mostrarResultado5 = document.getElementById("mostrarResultado5");
let mostrarResultado7 = document.getElementById("mostrarResultado7");
let num1 = document.getElementById("num1");
let divisible = document.getElementById("divisible");
const divbotonreset = document.getElementById("resetear");

// Creo una función en la que me pinte en HTML si el número dado es divisible por 2, 3, 5 o 7, y en caso de no serlo también me indique en el HTML que no lo es
function numerodivisible(num) {
    let esDivisible = false;
    let resultados = "";

    if (num % 2 === 0) {
        resultados += "El número es divisible por 2<br>";
        esDivisible = true;
    }
    if (num % 3 === 0) {
        resultados += "El número es divisible por 3<br>";
        esDivisible = true;
    }
    if (num % 5 === 0) {
        resultados += "El número es divisible por 5<br>";
        esDivisible = true;
    }
    if (num % 7 === 0) {
        resultados += "El número es divisible por 7<br>";
        esDivisible = true;
    }

    if (!esDivisible) {
        resultados = "El número no es divisible por 2, 3, 5 o 7";
    }

    mostrarResultado2.innerHTML = resultados;
    mostrarResultado3.innerHTML = "";
    mostrarResultado5.innerHTML = "";
    mostrarResultado7.innerHTML = "";
}

// Creo una función para que cuando se haga click en el botón llame a la función que indica si es divisible
divisible.addEventListener("click", () => {
    let numValue = parseInt(num1.value);
    if (!isNaN(numValue)) {
        numerodivisible(numValue);
    } else {
        mostrarResultado2.innerHTML = "Por favor, ingrese un número válido.";
        mostrarResultado3.innerHTML = "";
        mostrarResultado5.innerHTML = "";
        mostrarResultado7.innerHTML = "";
    }
});

// Creo una función para resetear la web
divbotonreset.addEventListener("click", () => {
    resetear();
});

function resetear() {
    num1.value = "";
    mostrarResultado2.innerHTML = "";
    mostrarResultado3.innerHTML = "";
    mostrarResultado5.innerHTML = "";
    mostrarResultado7.innerHTML = "";
}