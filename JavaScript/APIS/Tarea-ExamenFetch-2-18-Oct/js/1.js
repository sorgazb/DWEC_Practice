const urlJson = 'getDam1.json'
const cuerpo = document.querySelector('body')
window.addEventListener('load', inicio)
let vectorNotas = [];
let arrayTodosAprobados = [];
let arrayNotasMedias = [];
let arrayMismaNota = [];
let arrayMediaA = [];
let nombreNotaAlta = ''
let notaMasAlta = 0
function inicio() {
    function calcularNotaMedia(alumno) {
        let suma = 0
        const notas = [Number(alumno.nota1), Number(alumno.nota2), Number(alumno.nota3), Number(alumno.nota4), Number(alumno.nota5), Number(alumno.nota6)]
        notas.forEach(nota => {
            suma += nota
        })
        return suma / notas.length;
    }
    function apruebaTodo(alumno) {
        let aprobado = true
        const notas = [Number(alumno.nota1), Number(alumno.nota2), Number(alumno.nota3), Number(alumno.nota4), Number(alumno.nota5), Number(alumno.nota6)]
        notas.forEach(nota => {
            if (nota < 5) {
                aprobado = false
            }
        })
        return aprobado;
    }

    function mismasNotas(alumno) {
        let iguales = true
        let notaAnterior = -1
        const notas = [Number(alumno.nota1), Number(alumno.nota2), Number(alumno.nota3), Number(alumno.nota4), Number(alumno.nota5), Number(alumno.nota6)]
        notas.forEach(nota => {
            if (notaAnterior != -1) {
                if (notaAnterior != nota) {
                    iguales = false
                }
            }
            notaAnterior = nota
        })
        return iguales;
    }

    function mediaAprobadaConSuspenso(alumno) {
        let cumple = true
        const notas = [Number(alumno.nota1), Number(alumno.nota2), Number(alumno.nota3), Number(alumno.nota4), Number(alumno.nota5), Number(alumno.nota6)]
        notas.forEach(nota => {
            if (calcularNotaMedia(alumno)<5) {
                cumple = false
            }else{
                if (apruebaTodo(alumno)){
                    cumple = false
                }
            }
        })
        return cumple;
    }


    fetch(urlJson)
        .then((response) => response.json())
        .then((datos) => calculos(datos))
        .finally(() => console.log("Terminado."))
        .catch((error) => console.log(error));

    function calculos(alumnos) {
        //Nombre del alumno con la nota media mas alta
        let mejorAlumno = alumnos[0]
        let mejorMedia = calcularNotaMedia(mejorAlumno)
        alumnos.forEach(item => {
            let media = calcularNotaMedia(item)
            if (media > mejorMedia) {
                mejorMedia = media
                mejorAlumno = item.alumno
            }
            if (apruebaTodo(item)) {
                arrayTodosAprobados.push(item.alumno)
            }
            if (mismasNotas(item)) {
                arrayMismaNota.push(item.alumno)
            }
            if (mediaAprobadaConSuspenso(item)) {
                arrayMediaA.push(item.alumno)
            }
        });

        //alert('Mejor alumno: ' + mejorAlumno + ' media: ' + mejorMedia)
        //alert(arrayTodosAprobados)
        //alert(arrayMismaNota)
        //alert(arrayMediaA)



    }
}