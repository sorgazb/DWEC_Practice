const frutas = [
    { nombre: 'patatas', precio: 3, stock: 500 },
    { nombre: 'manzanas', precio: 2, stock: 200 },
    { nombre: 'peras', precio: 1, stock: 100 },
    { nombre: 'plátanos', precio: 1.5, stock: 0 },
    { nombre: 'uvas', precio: 4, stock: 150 },
    { nombre: 'naranjas', precio: 2.5, stock: 250 },
    { nombre: 'piñas', precio: 5, stock: 0 },
    { nombre: 'kiwis', precio: 3.5, stock: 120 },
    { nombre: 'fresas', precio: 6, stock: 90 },
    { nombre: 'mangos', precio: 4.5, stock: 75 }
];

const contenerdor = document.querySelector(".container")
const row1 = document.createElement("div")
row1.className = "row"
contenerdor.appendChild(row1)

const row2 = document.createElement("div")
row2.className = "row"
contenerdor.appendChild(row2)

const contenedorNombreFrutas = document.createElement("div")
contenedorNombreFrutas.className = "col-lg-4"
row1.appendChild(contenedorNombreFrutas)

const contenerdorFrutasSinStock = document.createElement("div")
contenerdorFrutasSinStock.className = "col-lg-4"
row1.appendChild(contenerdorFrutasSinStock)

const contenerdorStockTotal = document.createElement("div")
contenerdorStockTotal.className = "col-lg-4"
row1.appendChild(contenerdorStockTotal)

const contenedorMedia = document.createElement("div")
contenedorMedia.className = "col-lg-4"
row2.appendChild(contenedorMedia)


//solo el listado de los nombres (map): 10

// const nombreFrutas = frutas.map(fruta =>{
//     return fruta.nombre
// })

// nombreFrutas.forEach(element => {
//     const pNombre = document.createElement("p")
//     pNombre.textContent = element
//     contenedorNombreFrutas.appendChild(pNombre)
// });

//listado de frutas sin existencias (filter) : 2

// const frutasSinStock = frutas.filter(fruta => fruta.stock === 0)

// frutasSinStock.forEach(element => {
//     const pNombre = document.createElement("p")
//     pNombre.textContent = element.nombre
//     contenerdorFrutasSinStock.appendChild(pNombre)
// });

//suma total del stock (reduce) :1485

// const sumaTotal = frutas.reduce((suma, fruta) => suma + fruta.stock,0)
// const contenido = document.createElement("p")
// contenido.textContent = sumaTotal
// contenerdorStockTotal.appendChild(contenido)

//media de precios (recduce): 3.3 . Primero el total de medio y luego 
//divides entre frutas.length

// const sumaTotalPrecio = frutas.reduce((suma, fruta) => suma + fruta.precio,0)
// const contenido2 = document.createElement("p")
// contenido2.textContent = sumaTotalPrecio/frutas.length
// contenedorMedia.appendChild(contenido2)


//productos cuyo precio está por encima de la media (5)
// 1. Calcular la media de precios con reduce

// const sumaTotalPrecio = frutas.reduce((suma, fruta) => suma + fruta.precio,0)
// const contenido2 = document.createElement("p")
// contenido2.textContent = sumaTotalPrecio/frutas.length
// contenedorMedia.appendChild(contenido2)

// 2. Filtrar los productos que están por encima de la media 

// const precioMasMedia = frutas.filter(fruta => fruta.precio >= sumaTotalPrecio/frutas.length)

// precioMasMedia.forEach(element => {
//     const pNombre = document.createElement("p")
//     pNombre.textContent = element.nombre
//     contenedorMedia.appendChild(pNombre)
// });

//productos cuyo stock está por debajo de la media
// 1. Calcular la media del stock con reduce

// const sumaTotalStock = frutas.reduce((suma, fruta) => suma + fruta.stock,0)
// const contenido3 = document.createElement("p")
// contenido3.textContent = sumaTotalStock/frutas.length
// contenedorMedia.appendChild(contenido3)

// 2. Filtrar las frutas con stock por debajo de la media (148.5) filter

// const menosStockMedia = frutas.filter(fruta => fruta.stock < sumaTotalStock/frutas.length)

// menosStockMedia.forEach(element => {
//     const pNombre = document.createElement("p")
//     pNombre.textContent = element.nombre
//     contenedorMedia.appendChild(pNombre)
// });

// nombre de frutas cuyo precio es mayor o igual a 5 euros (piña,fresa)  filter y map

const mas5euros = frutas.filter(fruta => fruta.precio >= 5)

mas5euros.forEach(element => {
    const pNombre = document.createElement("p")
    pNombre.textContent = element.nombre
    contenedorMedia.appendChild(pNombre)
});

const mas5euros2 = frutas.map(fruta =>{
    if(fruta.precio >= 5){
        return fruta.nombre
    }
})

mas5euros2.forEach(element => {
    const pNombre = document.createElement("p")
    pNombre.textContent = element
    contenedorMedia.appendChild(pNombre)
});