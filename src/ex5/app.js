//Dado que accedo a la página
//Cuando ingreso los dos números
//Veo que número es el mayor

//creo constantes para recoger elementos Id del html
let mostrarResultado = document.getElementById("mostrarResultado");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

// Creo una función en la que dados dos números muestra en pantalla cuál es el mayor o si los dos son iguales
function sabermayor(n1,n2){
     if (n1>n2) {
        mostrarResultado.innerHTML= `El número mayor es el ${n1}`;
      } else if (n2>n1) {
        mostrarResultado.innerHTML= `El número mayor es el ${n2}`;
      } else {
        mostrarResultado.innerHTML= `Los números son iguales`;
      } 
     
}

// Creo una función para que cuando se haga click en el botón llame a la función que imprime cual que número es mayor
mayor.addEventListener('click', () =>{
    let infonum1= num1.value;
    let infonum2= num2.value;  
   sabermayor(parseInt(infonum1),parseInt(infonum2));
    
})

