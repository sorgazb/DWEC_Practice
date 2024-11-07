window.onload = inicio

const urlAPI = "http://moralo.atwebpages.com/menuAjax/dam1/getDam1.php"

function inicio(){
    fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => gestionPrograma(data))
    .finally(() => console.log("Terminado."))
    .catch((error) => alert(error))
}

function gestionPrograma(datos){
    notaMediaAlta(datos)
    alumnosTodosAprobados(datos)
    notasIguales(datos)
    notaMediaYSuspensos(datos)
}

function notaMediaAlta(datos){

    let alumnoNotaMediaAlta
    let notaMediaAlta = 0

    datos.forEach((dato,index) => {
        let alumno = dato.alumno
        let nota1 = Number(dato.nota1)
        let nota2 = Number(dato.nota2)
        let nota3 = Number(dato.nota3)
        let nota4 = Number(dato.nota4)
        let nota5 = Number(dato.nota5)
        let nota6 = Number(dato.nota6)

        let notaMedia = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6)/6

        if(notaMedia > notaMediaAlta){
            alumnoNotaMediaAlta = alumno
            notaMediaAlta = notaMedia
        }
    })

    const solucion = document.createElement("p")
    solucion.textContent = "El alumno con la nota media mas alta es : "+alumnoNotaMediaAlta
    document.body.appendChild(solucion)
}

function alumnosTodosAprobados(datos){

    let contAprobados = 0

    datos.forEach((dato,index) => {
        let nota1 = Number(dato.nota1)
        let nota2 = Number(dato.nota2)
        let nota3 = Number(dato.nota3)
        let nota4 = Number(dato.nota4)
        let nota5 = Number(dato.nota5)
        let nota6 = Number(dato.nota6)

        if(nota1 >= 5 && nota2 >= 5 && nota3 >= 5 && nota4 >= 5 && nota5 >= 5 && nota6 >= 5){
            contAprobados ++
        }
    })

    const solucion = document.createElement("p")
    solucion.textContent = "El numero de alumnos con todo aprobado son : "+contAprobados
    document.body.appendChild(solucion)
}

function notaMediaYSuspensos(datos){

    let cont = 0

    datos.forEach((dato,index) => {
        let alumno = dato.alumno
        let nota1 = Number(dato.nota1)
        let nota2 = Number(dato.nota2)
        let nota3 = Number(dato.nota3)
        let nota4 = Number(dato.nota4)
        let nota5 = Number(dato.nota5)
        let nota6 = Number(dato.nota6)

        let notaMedia = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6)/6

        if(notaMedia >= 5 && (nota1 < 5 || nota2 < 5 || nota3 < 5 || nota4 < 5 || nota5 < 5 || nota6 < 5)){
            cont ++
        }
    })
    const solucion = document.createElement("p")
    solucion.textContent = "El numero de alumnos con una media de aprobado pero con al menos un suspenso es de : "+cont
    document.body.appendChild(solucion)
}

function notasIguales(datos){

    let contIguales = 0

    datos.forEach((dato,index) => {
        let nota1 = Number(dato.nota1)
        let nota2 = Number(dato.nota2)
        let nota3 = Number(dato.nota3)
        let nota4 = Number(dato.nota4)
        let nota5 = Number(dato.nota5)
        let nota6 = Number(dato.nota6)

        if((nota1 == nota2) && (nota1 == nota3) && (nota1 == nota4) && (nota1 == nota5) && (nota1 == nota6)){
            contIguales ++
        }
    })

    const solucion = document.createElement("p")
    solucion.textContent = "El numero de alumnos con todas las notas iguales son : "+contIguales
    document.body.appendChild(solucion)
}