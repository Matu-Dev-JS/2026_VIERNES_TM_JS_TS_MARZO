/* 
En JS hay 3 operadores logicos muy conocidos

NOT: !
    Te devuelve el valor booleano opuesto

OR: ||
    Selecciona entre 2 valores
        - si el primero es verdadero, selecciona el primero
        - SI el primero el false, selecciona el segundo 
    Solo te devuelve falsy en caso de que ambos sean falsy

AND: &&
    Selecciona entre 2 valores
        - si el primero es verdadero, selecciona el segundo
        - SI el primero el false, selecciona el primero
    Te devuelve falsy si alguno o ambos son falsy
*/

//Falsy: false, 0, NaN, '', null, undefined
//Truthy: TODOS los NO FALSY

/* console.log(!1)
//Boolean(1) => true 

console.log(!'hola')
//Booelan('hola') => 'hola'

console.log(!0) */

//OR
//console.log(70 || 0) => 70

//console.log(0 || null)

//AND
/* console.log(30 && 70) //70
console.log(null && 50) // null */

//Condicion para entrar al club:
//1. No tenes que ser un niño
/* 
let edad = 12
let esNiño = edad < 18
let podesPasar = !(esNiño) 
*/

//2. Si sos mayor de edad, o te llamas 'pepe'
/* 
let edad = 12
let mayorEdad = edad >= 18
let nombre = 'juan'

let podesPasar = nombre == 'pepe' || mayorEdad 
*/

//3. Si sos mayor de edad y te llamas 'pepe'

/* let edad = 22
let mayorEdad = edad >= 18
let nombre = 'pepe'

let podesPasar = nombre == 'pepe' &&  mayorEdad  

podesPasar && console.log("podes pasar") */

//4. Si sos NO mayor de edad y te llamas 'pepe'
/* 
let edad = 22
let mayorEdad = edad >= 18
let nombre = 'pepe'

let podesPasar = nombre == 'pepe' && !mayorEdad  

podesPasar && console.log("podes pasar") */