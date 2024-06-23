//Dado que accedo a la página
//Cuando se renderiza
//Veo el resultado de la suma propuesta

const num1 = 3;
const num2 = 5;

//creo una const donde alamcenar la recogida del div de la parte html
const div = document.getElementById("app");

//creo una función donde pasados dos números sume esos números y la pinte en html
function suma(n1,n2){

   let total = n1+ n2;

    div.innerHTML = "La suma de"+num1+ " y "+num2+" es "+total;
    
}

//llamo a la función para que muestre la suma en el html
suma(3,5);