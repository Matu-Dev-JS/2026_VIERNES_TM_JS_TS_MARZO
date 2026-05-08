/* 
BLOQUES TEMATICOS: 
Integración: mejora proyectos existentes sin reescribir
Tipado de librerías: amplía compatibilidad y control
Strict mode: obliga a escribir código más robusto
Refactorización segura: reduce errores al modificar estructuras
Automatización: optimiza compilación y ejecución YA LO APLICAMOS CON VITE
*/


/* 
Integración: mejora proyectos existentes sin reescribir
*/
//Ya no lo importamos porque tenemos el nuevo modulo en ts
//import {sumar} from './math.js'

import { sumar } from "./math";

console.log(sumar(10, 5))


/* 
Tipado de librerías: amplía compatibilidad y control
*/

/* import axios from 'axios'

interface Todo{
  completed: boolean,
  id: number,
  title: string,
  userId: number
}

async function get (){
  const response = await axios.get<Todo>('https://jsonplaceholder.typicode.com/todos/1')
  console.log(response.data.completed)
}

get() */

/* 
Imaginemos que instalamos una libreria vieja de JS que no tiene tipos
'vieja-libreria'

*/

//import x from 'vieja-libreria'


/* 
Strict mode: obliga a escribir código más robusto
*/

function saludar (nombre: string): void{
  console.log('Hola ' + nombre)
}

function buscarUsuario (): string | undefined{
  return undefined
}


const nombre = buscarUsuario()

nombre?.toUpperCase()


//null safety
//let edad : number = null


/* 
Refactorización segura: reduce errores al modificar estructuras
*/

/* interface Usuario {
  nombre_completo: number
}

function soloStrings (x: string){

}

function llamar (user: Usuario){
  console.log(user.nombre_completo)
  soloStrings(String(user.nombre_completo))
} */