window.onload = inicio

const listaComunidades = document.querySelectorAll("h2") 

function inicio(){

    for (const comunidad of listaComunidades) {
        comunidad.onclick = ()=>{
            if(comunidad.textContent == 'Andalucía' || comunidad.textContent == "Canarias"){
                alert("-->Has pulsado "+comunidad.textContent+" ,hijo del Sur")
            }else{
                alert("-->Has pulsado "+comunidad.textContent+" ,hijo del Norte")
            }
            const listadoProvincias = comunidad.nextElementSibling
            for(const provincia of listadoProvincias.children){
                    let numHijo
                    for (let index = 0; index < listadoProvincias.children.length; index++) {
                        if(listadoProvincias.children[index] == provincia){
                            numHijo = index
                        }
                        
                    }
                    alert("Hijo   "+(numHijo+1)+" : "+provincia.textContent)
            }
        }
    }
} 





