//Dado que accedo a la página
//Cuando se renderiza
//Veo el texto

//Creo una constante con el texto que quiero enseñar
const texto = "Hello javaScript";

//Creo funcion donde le pase el texto y pinte ese texto en el elemento html escogido por id
function añadirtexto(string){
document.getElementById("app").innerHTML =string ;
}

//llamo a la función para que pinte en el html el texto
añadirtexto(texto);