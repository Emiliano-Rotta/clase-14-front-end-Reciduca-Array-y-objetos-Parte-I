//Repaso de la clase pasada
// var edad = 17
// var autorizacion = true
// var acompañado = false


// if (edad >= 18 || autorizacion || acompañado){
//     console.log("podes salir del país")
// }
// else {
//     console.log("sos menor y estas solo")
// }

// var nombreUno = "cerveza"
// var nombreDos = "manzana"

// if (nombreUno.length === nombreDos.length){
//     console.log("los nombres tienen la misma extension")
// }
// else {
//     console.log("NOOOO")
// }

// == ===
// != !==
// < 
// >
// >=
// <=

// && ||


// Ejercicio de piedra papel o tijera

// function piedraPapelTijera (a, b) {
//     if (a === b){
//         alert ("empate")
//     }
//     else if (a === "tijera" && b === "papel"){
//         alert("gano el equipo A")
//     }
//     else if (a === "tijera" && b === "piedra"){
//         alert("gano el equipo B")
//     }
//     else if (a === "papel" && b === "tijera"){
//         alert("gano el equipo B")
//     }
//     else if (a === "papel" && b === "piedra"){
//         alert("gano el equipo A")
//     }
//     else if (a === "piedra" && b === "tijera"){
//         alert("gano el equipo A")
//     }
//     else if (a === "piedra" && b === "papel"){
//         alert("gano el equipo B")
//     }
// }


// var jugadorUno = prompt("Jugador A escriba su jugada")
// var jugadorDos = prompt("Jugador B escriba su jugada")

// piedraPapelTijera(jugadorUno, jugadorDos)







// CLASE DE HOY
            //     0        1         
// var alumnos = ["Damian", "Camila"]
// var edades = [25, 20, 40, 30]
// var booleanos = [true, true, false, true]

// //                        0               1      2
// var arreglo = [ ["Damian", "Camila"], [54, 25], []]
// var objetos = [{},{}]

// alert (arreglo[0][1])
// alert (alumnos[1])

// Ejercicio: hasta 14.16

// var ejercicioDificil = ["Emiliano", 55, {}, ["string", [["Llegar acá"],[{},{}]], true]]

// alert (ejercicioDificil[3][1][0])


// var alumnos = ["Damian", "Camila", "Joaquin", "Dylan", "Alexander", "Agustin"]

// console.log("hola ", alumnos[0])
// console.log("hola ", alumnos[1])
// console.log("hola ", alumnos[2])
// console.log("hola ", alumnos[3])
// console.log("hola ", alumnos[4])
// console.log("hola ", alumnos[5])


// sintaxis
// palabra         var que contiene el            el arreglo a 
// reservada       elemento de cada recorrido      recorrer
//    for           (const iterator                of object) {
    
// }


// for (const nombre of alumnos) {
//     console.log("hola ", nombre)
// }

// var edades = [25, 20, 40, 30, 20]

// for (const varMultiplicar of edades) {
//     console.log(varMultiplicar *2)
// }

// var checkMenor = false

// for (const menor of edades) {
//     if(menor < 18) {
//         checkMenor = true
//     }
// }
// if (checkMenor === false) {
//     console.log("Todos son mayores")
// }
// else {
//     console.log("hay por lo menos un menor")
// }

// EJERCICIOS   
// contiene(numero, numeros)
// Crear una funci´ón contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:


// function contiene (numero, numeros){

//     var check = false
//     for (const n of numeros) {
//         if (n === numero){
//             check = true
//         }
//     }
//     console.log(check)
// }

// contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
// contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false


// sumar(numeros)
// Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:


// function sumarNumeros(numeros){
//     var suma = 0
//     for (const n of numeros) {
//         suma = suma + n
        
//     }
//     console.log(suma)
// }
// sumarNumeros([5, 7, 10, 12, 24]) // 58



// obtenerMenor(numeros)
// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:


// function obtenerNumeroMenor(numeros){
//     var menor = numeros[0]
//     for (const n of numeros) {
//     if(menor > n ) {
//         menor = n
//     } 
//     }
//     console.log(menor)
// }

// obtenerNumeroMenor([5, 7, 99, 34, 54, 2, 12]) // 2