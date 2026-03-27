/* 
Control de flujo son las estructuras que permiten controlar el flujo de nuestro codigo
*/

//IF
//EL if solo ejecuta el bloque de codigo si la condicion Truthy

//Podes pasar si sos pepe

/* 
let nombre = 'pepe'

if(nombre === 'pepe'){
    console.log("podes pasar")
} */

//Podes existir si tenes nombre

/* if(nombre){
    console.log('existo')
} */


//ELSE

//Podes pasar si sos pepe sino te dare un patada ninja

/* let nombre = 'pepe'

if(nombre === 'pepe'){
    console.log("podes pasar")
}
else{
    console.log("patada ninja")
} */

//ELSE IF

//Podes pasar si sos pepe, si sos vip podes pasar a VIP sino te dare un patada ninja

/* let nombre = 'maria'
let isVip = false

if(nombre === 'pepe'){
    console.log("podes pasar")
}
else if(isVip){
    console.log("podes pasar a VIP")
}
else{
    console.log("patada ninja")
} */


/* 
Calculadora
    Operaciones disponibles = '+', '-'
*/

/* 
let operacion = '-'
let numero_1 = 20
let numero_2 = 90

if(operacion === '+'){
    let resultado = numero_1 + numero_2
    console.log('El resultado de la suma es ' + resultado)
}
else if(operacion === '-'){
    let resultado = numero_1 - numero_2
    console.log('El resultado de la resta es ' + resultado)
}
else{
    console.log("Operacion no disponible")
} 
*/

/* 
SWITCH
Nos permite hacer comparaciones multiples de estricta igualdad mas "facil que el if"
Si el caso se ejecuta entonces seguira evaluando los otros casos, por eso se recomienda el break para cortar la ejecucion
*/
/* 
let operacion = 'restar'
let numero_1 = 20
let numero_2 = 90

switch (operacion) {

    case 'suma':
    case '+': {
        let resultado = numero_1 + numero_2
        console.log('El resultado de la suma es ' + resultado)
        break;
    }
    case 'restar':
    case '-': {
        let resultado = numero_1 - numero_2
        console.log('El resultado de la resta es ' + resultado)
        break;
    }
    default: {
        console.log("Operacion no disponible")
        break;
    }
} */

/* 
EN JS para obtener datos del usuario podemos hacerlo con prompt
Prompt devuelve string, o null en caso de cancelar
*/

/* 
let edad = prompt('ingresa tu edad')
console.log(edad)

if(!isNaN(edad)){
    edad = Number(edad)
}

console.log(edad) */