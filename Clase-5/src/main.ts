console.log("Hola mundo desde typescript")

/* 
Typescript tiene tipado estatico: Una variable se debe tipar y su tipo no puede variar en la ejecucion del programa
*/

/* let nombre : string = 'pepe'

let nombre_number : number = Number(nombre) */

/* 
string
number
boolean
null
undefined
any: Sirve para cualquier tipo de dato PERO no es una buena practica, mientras mas puedas definir el tipo de dato esperado mejor
*/

//let result : string | number
/* let result : any = 'pepe'
result = 40
result = true */

/* Tipado explicito */

//let nombre : string = 'pepe'

/* Tipado por inferencia */
//Recomendaria en un inicio NO usar la inferencia ya que puede ser confuso y no nos obliga a pensar en los tipados
/* 
let nombre = 'pepe'
nombre = 40 */

function calcularIva (precio: number): number {
  let iva : number = precio * 0.21
  return iva
}

function saludar(nombre: string): void{
  console.log("Hola " + nombre)
}

function enviarMail (email: string): number | null{
  try{
    console.log('Mail se envia')
    return 1
  }
  catch(error){
    console.error("Hubo un fallo")
    return null
  }
}

const nombres: string[] = ['pepe', 'juan', 'lucas']
const notas: number[] = [90, 12, 33]

interface Persona {
  nombre: string,
  edad: number
}

const pepe : Persona = {
  nombre: 'pepe',
  edad: 40
}

const juan : Persona = {
  nombre: 'juan',
  edad: 50
}

const personas : Persona[] = [pepe, juan]