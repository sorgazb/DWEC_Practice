window.addEventListener("DOMContentLoaded",inicio);
const tabla=document.querySelector("table")
const cabecera=document.querySelector("tr thead");
const contenidos=document.querySelector("tbody")
let electoresT=0;
let electoresB=0;
function inicio(){
    fetch("eleccionesUSA.csv")
    .then(respuesta=>respuesta.text())
    .then(data=>mostrar(data))

}
function mostrar(data){
     const filas = data.split("\n"); // Dividir en filas
     const encabezados = filas[0].split(";"); // Obtener encabezados
     const cabecera = document.createElement("tr");
     //cabecera: datos de filas[0] que se manda a th
     encabezados.forEach((cab,indice)=>{
        const th=document.createElement("th");
        th.setAttribute("scope","col")
        const sp=document.createElement("sp");
        sp.style.backgroundColor="lightgreen"
        sp.textContent=cab;
        th.appendChild(sp)
        cabecera.appendChild(th);
     })
     //contenidos
     tabla.appendChild(cabecera)
     console.log(filas)
     filas.forEach((estado,indice) => {
        if (indice>0){
            const columnas = estado.split(";"); 
            const fila = document.createElement("tr");
           
            columnas.forEach((celda,posicion)=>{
                const td=document.createElement("td");
                if (Number(columnas[2])>Number(columnas[3])){
                  if (posicion==2){td.style.backgroundColor="blue"}
                }
                if (Number(columnas[2])<Number(columnas[3])){
                    if (posicion==3){td.style.backgroundColor="red"}
                  }
                td.textContent=celda;
                fila.appendChild(td);
            });
            const ganador=document.createElement("td");
            const electores=document.createElement("td")
            if (Number(columnas[2])>Number(columnas[3])){
                ganador.textContent="Biden";
                electores.textContent=columnas[1];
                electoresB+=Number(columnas[1])
            }else{
                ganador.textContent="Trump"
                electores.textContent=columnas[1];
                electoresT+=Number(columnas[1])

            }
            fila.appendChild(ganador);
            fila.appendChild(electores)
            contenidos.appendChild(fila);
        }

        tabla.appendChild(contenidos)
        
     });
     const Ganadores=document.createElement("p");
     Ganadores.textContent="Representantes:  Biden: "+electoresB+" Trump: "+electoresT
     document.body.appendChild(Ganadores);
     tabla.appendChild(Ganadores)
}    