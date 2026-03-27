/* 
EcmaScript

Antes de ES6 js era un lenguaje problematico. Tenia una sintaxis compleja y ademas te dejaba hacer cualquier cosa

VAR ES5: Ya no se usa
    - Se puede redeclarar
    - Se puede reasignar
    - Tiene hoisting
    - Se inicializa (si no tiene valor) en undefined

LET ES6
    - Se puede redeclarar (Pero en distintos bloques)
    - Se inicializa (si no tiene valor) en undefined
    - Se puede reasignar
    - NO Tiene hoisting

CONST ES6: Se usan para guardar valores que seran iguales del principio al fin del programa
    - Se puede redeclarar (Pero en distintos bloques)
    - NO Se inicializa (si no tiene valor) en undefined (DEBE TENER UN VALOR INICIAL)
    - NO puede reasignar
    - NO Tiene hoisting
*/

/* 
JS lee cualquier declaracion de var primero antes de ejecutar el programa, y declara implicitamente tu variable var en la cima de codigo
*/

/* 
JS existen los bloques de codigo, basicamente fragmentos de codigo JS
Normalmente los bloques de codigo se definen con {}
*/
/* 
let nombre = 'juan'
console.log(nombre)
{
    let nombre = 'pepe'
    console.log(nombre)
    {
        console.log(nombre)
    }
}
console.log(nombre) */

