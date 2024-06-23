//Dado que accedo a la página
//Cuando ingreso los dos números
//Veo el resultado de la suma de dichos números

//creo constantes para recoger elementos Id del html
let mostrarResultado = document.getElementById("mostrarResultado");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");


//Creo función para mostrar por pantalla el resultado de una variable donde gaurdaré la suma
function pintar(i,number1,number2){
    mostrarResultado.innerHTML=`El resultado de ${number1} + ${number2} es: `+i ;
}

 //Creo funcion para sumar dos numeros y llamo a la función pintar 
function sumatorio(n1,n2){
  
    let suma = n1+n2;
    
     pintar(suma,n1,n2);
} 
 
//Creo función para que cuando se haga click en el botón guarde el valor de los dos números, los haga int y llame a la función sumatorio
sumar.addEventListener('click', () =>{

    let infonum1= num1.value;
    let infonum2= num2.value;   
      sumatorio(parseInt(infonum1),parseInt(infonum2))
    
})








    
