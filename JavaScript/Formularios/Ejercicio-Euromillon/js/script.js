let accion=document.getElementById("validar");
let avanzar=true;
accion.onsubmit=function () {
    avanzar=true;
    //identificar n1
    let n1=document.getElementById("idN1").value;
    let sm1=document.getElementById("smN1");

    //identificar n2
    let n2=document.getElementById("idN2").value;
    let sm2=document.getElementById("smN2");

    //identificar n1
    let n3=document.getElementById("idN3").value;
    let sm3=document.getElementById("smN3");

    //identificar n1
    let n4=document.getElementById("idN4").value;
    let sm4=document.getElementById("smN4");

    //identificar n1
    let n5=document.getElementById("idN5").value;
    let sm5=document.getElementById("smN5");

    //identificar n1
    let n6=document.getElementById("idN6").value;
    let sm6=document.getElementById("smN6");


    // Duplicación de números
    let arrayNumeros = [n1, n2, n3, n4, n5, n6];
    let arrayAux = [];
    let estaR = false;
    
    // Verificar duplicados
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayAux.includes(arrayNumeros[i])) {
            estaR = true;
            break; 
        } else {
            arrayAux.push(arrayNumeros[i]);
        }
    }
    
    let smD = document.getElementById("smDuplicado");
    
    if (estaR === true) {
        smD.textContent = "* Hay números duplicados";
        avanzar = false;
    } else {
        smD.textContent = ""; // Limpiar mensaje si no hay duplicados
    }

    
    
    //llamar a la función 1
    validar(n1,sm1);

    //llamar a la función 2
    validar(n2,sm2);

    //llamar a la función 3
    validar(n3,sm3);

    //llamar a la función 4
    validar(n4,sm4);

    //llamar a la función 5
    validar(n5,sm5);

    //llamar a la función 6
    validar(n6,sm6);

    function validar(nX,smX) {
        if (nX.length==0) {
            smX.textContent="* Campo obligatorio"
            avanzar=false;
        } else if (isNaN(nX)) {
            smX.textContent="* No es un numero"
            avanzar=false;
        }else if (!Number.isInteger(Number(nX))){
            smX.textContent="*no es un numero entero"
        }else if (Number(nX)<0 || Number(nX)>50){
            smX.textContent="* numero fuera del rango 0-50"
            avanzar=false;
        }else {
            smX.textContent=""
        }
    }
    return avanzar;

}