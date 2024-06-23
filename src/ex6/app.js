//Dado que accedo a la página
//Cuando ingreso los tres números
//Veo que número es el mayor

//creo constantes para recoger elementos Id del html
let mostrarResultado = document.getElementById("mostrarResultado");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");

// Creo una función en la que dados tres números muestra en pantalla cuál es el mayor 
function sabermayor(n1,n2,n3){
     if (n1>n2 && n1>n3) {
        mostrarResultado.innerHTML= `El número mayor es el ${n1}`;
      } else if (n2>n1 && n2>n3) {
        mostrarResultado.innerHTML= `El número mayor es el ${n2}`;
      }else if (n3>n1 && n3>n2) {
        mostrarResultado.innerHTML= `El número mayor es el ${n3}`;
      }else {
        mostrarResultado.innerHTML= `Hay dos o más numeros empatados en mayor`;
      } 
     
}

// Creo una función para que cuando se haga click en el botón llame a la función que imprime cual que número es mayor
mayor.addEventListener('click', () =>{
    let infonum1= num1.value;
    let infonum2= num2.value;  
    let infonum3= num3.value;  
   sabermayor(parseInt(infonum1),parseInt(infonum2),parseInt(infonum3));
    
})

