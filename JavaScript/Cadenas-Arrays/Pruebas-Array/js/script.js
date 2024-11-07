// const alumnos = [ { nombre: 'Lola', nota: 9 }, { nombre: 'Lolo', nota: 5 }]
// alumnos.push({ nombre:'Petra',nota: 10 },{nombre: 'Paco',nota: 5})
// console.log(alumnos)

// let vector1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// console.log("Vector completo: ",vector1)
// let ultimoElemento = vector1.pop()
// console.log("Vector sin ultimo: ",vector1)
// console.log("Elemento borrado: "+ultimoElemento)

// const arboles = [ { nombre: 'encina', altura: 10 }, { nombre: 'chopo', altura: 30 }] 
// console.log(arboles)
// arboles.unshift({ nombre: 'pino', altura: 25 })
// console.log(arboles)

// let vector2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(vector2)
// const primero = vector2.shift()
// console.log(vector2)

// const vector1 = [1,2,3] 
// const vector2 = [4,5,6] 
// const vector3 = [7,8,9]
// const vectorTotal = vector1.concat(vector2, vector3)
// console.log(vector1)
// console.log(vector2)
// console.log(vector3)
// console.log(vectorTotal)

// const vector1 = [1, 2, 3, 4, 5] 
// const vector2 = vector1.slice(0, 3)
// console.log(vector1)
// console.log(vector2)

// const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// vector.splice(3, 4)
// console.log(vector)

const letras = ['c', 'k', 'b', 'd', 'a']
letras.sort()
console.log(letras)
letras.sort().reverse()
console.log(letras)

const numeros = [9,5,35,53,244]
console.log(numeros.sort((a, b) => a - b))
numeros.sort((a, b) => a - b).reverse()
console.log(numeros)

const fruta = 
[{ nombre: 'naranja', precio: 4, stock: 10 }, 
{ nombre: 'manzanas', precio: 2, stock: 1000000000000 },
{ nombre: 'kiwi', precio: 3, stock: 1 }] 
let precio = fruta.sort((a, b) => a.precio - b.precio)
let stock = fruta.sort((a, b) => a.stock - b.stock)

console.log(precio)

console.log(stock)