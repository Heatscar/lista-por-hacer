var boton = document.getElementById("eliminar");
    boton.addEventListener("click", function() {
    document.getElementById("contenedor").innerHTML = ""; 
    },false)
var boton = document.getElementById("eliminar-tareas");
    boton.addEventListener("click", function() {
    document.getElementById("myUL").innerHTML = ""; 
    },false)  

function mueveReloj(){
    var LaFecha=new Date();
    var Mes=new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasem=new Array('Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado');
    var diasemana=LaFecha.getDay();
    var FechaCompleta="";
    var NumeroDeMes="";
    NumeroDeMes=LaFecha.getMonth();
    FechaCompleta=diasem[diasemana]+" "+LaFecha.getDate()+" de "+Mes[NumeroDeMes]+" de "+LaFecha.getFullYear()+" ";
    document.getElementById('fecha').innerHTML=FechaCompleta;
} 
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Necesitas escribir algo!");
      } else {
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";
}