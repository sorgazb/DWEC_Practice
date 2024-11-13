window.addEventListener("DOMContentLoaded", inicio);

const btnAniadirNumero = document.querySelector("#btnaniadirN");
const btnAniadirNombre = document.querySelector("#btnaniadirB");
const btnAniadirPelicula = document.querySelector("#btnaniadirP");
const btnEliminarUltimoNum = document.querySelector("#btnEliminarN");
const btnAniadirNumeroPrincipio = document.querySelector("#btnAniadirU");
const btnEliminarNumeroPrincipio = document.querySelector("#btnEliminarS");
const btnCopia = document.querySelector("#btnSlice");
const btnJoinSeparador = document.querySelector("#btnJoin");
const btnContiene = document.querySelector("#btnIncludes");
const btnOrdenar = document.querySelector("#btnSort");
const btnOrdenarReverse = document.querySelector("#btnReverse");
const btnMapeo = document.querySelector("#btnMap");
const btnReduce = document.querySelector("#btnReduce");
const btnFilter = document.querySelector("#btnFilter");
const btnSome = document.querySelector("#btnSome")
const btnEvery = document.querySelector("#btnEvery")
const btnFind = document.querySelector("#btnFind")
const btnKeys = document.querySelector("#btnKeys")
const btnValues = document.querySelector("#btnValues")
const btnEntry = document.querySelector("#btnEntry")

const vector1 = [2, 5, 2, 4, 6, 8, 9, 6];
const vector2 = ["paco", "lola", "pedro"];
const vector3 = [
  {
    titulo: "Los lunes al sol",
    minutos: 120,
  },
  {
    titulo: "La delgada línea roja",
    minutos: 120,
  },
  {
    titulo: "Bienvenido MrMarsall",
    minutos: 93,
  },
];

function inicio() {
  btnAniadirNumero.addEventListener("click", aniadirNumero);
  btnAniadirNombre.addEventListener("click", aniadirNombre);
  btnAniadirPelicula.addEventListener("click", aniadirPelicula);
  btnEliminarUltimoNum.addEventListener("click", eliminarUltimoNumero);
  btnAniadirNumeroPrincipio.addEventListener("click",introducirNumeroPrincipio);
  btnEliminarNumeroPrincipio.addEventListener("click", eliminarNumeroPrincipio);
  btnCopia.addEventListener("click", hacerCopia);
  btnJoinSeparador.addEventListener("click", joinSeparator);
  btnContiene.addEventListener("click", contieneElemento);
  btnOrdenar.addEventListener("click", ordenarArray);
  btnOrdenarReverse.addEventListener("click", ordenarArrayReverse);
  btnMapeo.addEventListener("click", mapeo);
  btnReduce.addEventListener("click", reduce);
  btnFilter.addEventListener("click", filer);
  btnSome.addEventListener("click",some)
  btnEvery.addEventListener("click",every)
  btnFind.addEventListener("click",find)
  btnKeys.addEventListener("click",keys)
  btnValues.addEventListener("click",values)
  btnEntry.addEventListener("click",entry)
}

function aniadirNumero() {
  let numero = prompt("Introduce el numero que deseas añadir a la lista: ");
  vector1.push(Number(numero));
  console.log("Vector Numeros: " + vector1);
}

function aniadirNombre() {
  let nombre = prompt("Introduce el nombre que deseas añadir a la lista: ");
  vector2.push(nombre);
  console.log("Vector Numeros: " + vector2);
}

function aniadirPelicula() {
  let titulo = prompt("Introduce el titulo de la pelicula:");
  let duracion = Number(prompt("Introduce la duracion de la pelicula:"));
  vector3.push({ titulo, duracion });
  console.log(vector3);
}

function eliminarUltimoNumero() {
  console.log(vector1);
  let numero = vector1.pop();
  alert("Elemento " + numero + " eliminado.");
  console.log(vector1);
}

function introducirNumeroPrincipio() {
  console.log(vector1);
  let numero = Number(prompt("Introduce el numero:"));
  vector1.unshift(numero);
  console.log(vector1);
}

function eliminarNumeroPrincipio() {
  console.log(vector1);
  let numero = vector1.shift();
  alert("Elemento " + numero + " eliminado.");
  console.log(vector1);
}

function hacerCopia() {
  console.log("Vector antes del slice: " + vector1);
  let vectorSlice = vector1.slice(2, 7);
  console.log("Vector Slide:" + vectorSlice);
}

function joinSeparator() {
  let cadena = vector1.join("-");
  console.log("Cadena del vector1 " + cadena);
}

function contieneElemento() {
  let numero = Number(prompt("Introduce el numero que quieres buscar"));
  if (vector1.includes(numero)) {
    alert("El array contiene ese numero");
  } else {
    alert("El array no contiene ese numero");
  }
}

function ordenarArray() {
  console.log("Vector antes de ordenacion: " + vector1);
  let vectorOrdenado = vector1.slice();
  vectorOrdenado.sort((a, b) => a - b);
  console.log("Vector Ordenado: " + vectorOrdenado);
}

function ordenarArrayReverse() {
  console.log("Vector antes de ordenacion: " + vector1);
  let vectorOrdenado = vector1.slice();
  vectorOrdenado.sort((a, b) => a - b).reverse();
  console.log("Vector Ordenado: " + vectorOrdenado);
}

function mapeo() {
  let vectorCopia = vector2.slice();
  const nombresMayuscula = vectorCopia.map((nombre) => nombre.toUpperCase());
  console.log(nombresMayuscula);
}

function reduce() {
  const sumaTotal = vector3.reduce(
    (suma, pelicula) => suma + pelicula.minutos,
    0
  );
  console.log("El total de duracion es :" + sumaTotal);
}

function filer() {
  const sumaTotal = vector3.reduce(
    (suma, pelicula) => suma + pelicula.minutos,
    0
  );
  const duracionMasMedia = vector3.filter(
    (pelicula) => pelicula.minutos >= sumaTotal / vector3.length
  );

  duracionMasMedia.forEach((element) => {
    console.log(element.titulo)
  });
}

function some(){
  let numero = Number(prompt("Introduce un numero"))
  const hayMenores = vector1.some(elemento => elemento < numero)
  console.log("Hay menores "+hayMenores)
}

function every(){
  let numero = Number(prompt("Introduce un numero"))
  const hayMenores = vector1.every(elemento => elemento < numero)
  console.log("Son menores "+hayMenores)
}

function find(){
  let numero = Number(prompt("Introduce un numero"))
  const hayMenores = vector1.find(elemento => elemento == numero)
  console.log("Esta es numero "+hayMenores)
}

function keys(){
  console.log(Object.keys(vector3[0]))
}

function values(){
  console.log(Object.values(vector3[0]))
}

function entry(){
  console.log(Object.entries(vector3[0]))
}