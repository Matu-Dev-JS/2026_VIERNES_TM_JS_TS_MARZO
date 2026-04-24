/* 
Bloques Tematicos:

TIPADOS:
- Tipos primitivos: obligatorios para evitar inconsistencias
- Arrays tipados: colecciones con elementos homogéneos
- Objetos tipados: contratos estructurados para datos complejos
- Type aliases: simplifican definiciones reutilizables
- Unión types: permiten múltiples formas válidas
- Interfaces: definen contratos claros y mantenibles
- Enums: representan conjuntos de valores fijos

*/

/* 
Tipos de datos primitivos:
string
number
boolean
null
undefined
*/

/* 
  TIPADO EXPLICITO:
  Explicitamente en el codigo indicamos el tipo de dato de una variable
*/
/* 
let nombre : string = 'pepe'
let edad : number = 50
let esMayorEdad : boolean = edad >= 18
let recibioPaquete : null | boolean = null 
*/

/* 
  Tipado implicito o por inferencia:
  No tipamos explicitamente pero typescript infiere el tipo de dato de una variable
  Recomendacion:
    No usar inferencia en esta etapa, debido a que no te obliga a pensar en los tipos de datos, basicamente es volver parcialmente a JS y ESO es justamente lo que queremos evitar (En especial si jamas usamos un lenguaje tipado)
*/

/* 
let nombre = 'pepe'
let edad = 50
let esMayorEdad = edad >= 18
 */
//En este caso como es una union de tipos la inferencia puede ser problematica, recomiendo tiparlo explicitamente
//let recibioPaquete : null | boolean = null


//ARRAYS TIPADOS

//Un array compuesto unicamente de NUMEROS, puede estar vacio
//const notas : number[] = [10, 8, 4]

//Otra sintaxis valida de tipar un array
//const nombres : Array<string> = ['pepe', 'juan', 'jose']

//OBJETOS LITERALES TIPADOS
/* const persona : {
  nombre: string,
  edad: number
} = {
  nombre: 'pepe',
  edad: 50
} */

//Array tipado de objetos
//const personas : {nombre: string, edad: number}[] = [{nombre: 'juan', edad: 40}]

//TYPE ALIASES
/* 
Nos permiten definir un tipo y reutilizarlo en el programa
Es como como una variable pero que guarda el tipo de dato
*/

//En mi programa los IDs o son alfanumericos o son numeros

/* type ID = number | string

const response = {
  id: 1
}
const product_id : ID = response.id 
 */

/* 
type Persona = {
  nombre: string,
  edad: number
}

const persona_1 : Persona = {nombre: 'pepe', edad: 40}
 */

//Un envio puede estar en 'pendiente' 'recibido' 'rechazado'
/* type EnvioEstatus = 'pendiente' | 'recibido' | 'rechazado'
type Envio = {
  fecha_envio: Date,
  id: ID,
  destino: string,
  fecha_salida: Date,
  estatus: EnvioEstatus
}

const envio : Envio = {
  fecha_envio: new Date(),
  id: 1,
  destino: 'Santa cruz',
  fecha_salida: new Date(),
  estatus: 'recibido'
}
 */
//Unión types
//La capacidad de declarar mas de un tipo de dato para una misma variable

//let nombre : null | string

//INTERFACES
//Nos permiten tipar objetos

/* interface Persona {
  id: number,
  nombre: string,
  edad: number
}

interface Empleado extends Persona {
  salario: number
}

function saludar (persona: Persona) : void{
  console.log("Hola " + persona.nombre)
}

const empleado : Empleado = {
  nombre: 'pepe',
  id: 1,
  salario: 4000,
  edad: 40
} */



/* 
Enum
Nos permite guardar multiples opciones para un valor
*/
/* 
enum Role {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest'
}

interface Persona {
  id: number,
  nombre: string,
  edad: number,
  role: Role
}

const persona_1 = {
  id: 1,
  nombre: 'pepe',
  edad: 59,
  role: Role.ADMIN
} */