/* 
Las funciones nos permiten guardar acciones (Bloques de codigo) en memoria

Los parametros de una funcion pueden llamarse como vos quieras, lo IMPORTANTE es el orden
Una funcion puede o no tener retorno. SI no tiene retorno la funcion retorna undefined.

*/

/* function obtenerIva (precio){
    let iva = precio * 0.21
    return iva
}

let iva_1 = obtenerIva(1000)
console.log(iva_1) */

/* function saludar(){
    console.log("hola a todos!")
}

console.log(saludar()) */

/* function resta(a, b){
    return a - b
}
console.log(resta(5, 10)) */


//Callstack
/* 
El callstack es la forma en la JS ordena las llamadas y resoluciones de una funcion
Las funciones mas internas se ejecutan antes que las funciones externas

POR ESO SE LLAMA CALLSTACK, STACK quiere decir PILA
La pila sigue el concepto: EL primero en entrar es el ultimo en salir
*/

/* console.log(resta(40, 10) + resta(100, 30)) */

//Arrow functions: 
//Son una forma distinta de escribir funciones
/* const sumar = (a, b) => {
    return a + b
} */

//Retorno implicito
/* const sumar = (a, b) => a + b

console.log(sumar(1, 2)) */