/* 
BLOQUES TEMATICOS: 
- import/export
- IIFE: Aislacion de funciones
- Namespaces
- Patrones
*/

import { CustomMath } from "./math";



//import/export
/* 
JS tiene la posibilidad de separar en modulos las funciones y variables. Luego podemos llamarlas donde precisemos con export import

El export marca que una funcion o variable es importable en otro modulo, basicamente es un "esto puede ser llamado desde otro modulo"
SI una funcion o variable dentro de un modulo NO tiene export, esa funcion o variable NO PODRA SER IMPORTADA EN OTROS MODULOS
Adicionalmente un modulo puede tener un export default que sirvira para exportar por defecto, es decir si NO te aclaran que estas importando por defecto el modulo devolvera este export

El import sirve para poder "llamar" a una funcion o variable de otro modulo, pero esta misma debe tener export, sino no podra importarse
El import tiene 2 formas de llamarse, por medio de la "desestructuracion" EJ: import { sumar } from "./math"; 
o por medio de el default
import math from './math'
console.log(math(10, 2))
En este caso math es el export default del modulo 'math.ts' podria llamarse como quiseras

*/

/* import { sumar } from "./math";
console.log(sumar(7, 7)) */


//IIFE Inmmediatly Invoked Function Expression
//Funciones invocadas inmediatamente despues de declararse
//mantener limpio el ambito global de funciones locales

//Quiero que cuando empieze mi programa me diga 'hola mundo'
//Encierro el codigo que quiero ejecutar solo 1 vez dentro de una funcion anonima y luego inmediatamente lo invoco
/* (() => {
    let saludo = 'hola mundo'
    console.log(saludo)
})() */

//Una variante mas simple es hacer bloques de codigo
/* {
    let saludo = 'hola mundo'
    console.log(saludo)
} */

//Hay una pequeña diferencia entre las variantes de AISLACION de variables
//Si usamos var no podemos usar la segunda variante, hay que hacerlo con IIFE pero tambien la funcion anonima DEBE SER function
//Esto mismo se aplica a las functions
//Esto ya no se usa tanto porque var ya no se usa en nuevas apps.
/* (function (){
    var saludo = 'hola mundo'
    function sumar(a: number, b:number):number{
        return a + b
    }
})() */


//Namespaces
//Agrupar funciones relacionadas
//Con los namespaces podemos organizar mejor el codigo ya que permite nombrar la tematica de funcion

/* console.log(CustomMath.Arithmetic.sumar(30, 40))
console.log(CustomMath.Geometry.squareArea(60)) */

//Patrones
//Son soluciones reutilizables para problemas frecuentes
//Sirven para mantener, escalar y trabajar de forma estandarizada
//SON PARA Devs con MUCHO entendimiento del mundo del desarrollo ya (Para MI) estos REQUIEREN de HORAS y HORAS de aprendizaje y aplicacion
//Mi recomendacion para aprender bien patrones, ejemplo Modular. https://www.patterns.dev/ y tambien los videos de gentlemanprogramming 
//SI ESTAN EMPEZANDO A PROGRAMAR PARA MI NO DEBERIAS APRENDER ESTO!!

/* 
Vamos a ver 3 de mis patrones favoritos:
*/

//Singleton
//Es una clase DE una sola instancia como maximo

/* class Config {
    private static instance: Config

    private constructor (){}

    static getInstance (){
        if(!this.instance){
            this.instance = new Config()
        }
        return this.instance
    }
}

const config_1 = Config.getInstance() //Crea internamente la instancia y la devuelve
const config_2 = Config.getInstance() //Nos devuelve la instancia previamente creada

console.log(config_1 === config_2) */

//Factory
//Crear objetos sin exponer la logica de creacion


/* interface Animal {
    hacerSonido(): void
}

class Perro implements Animal{
    hacerSonido(): void {
        console.log('Guau')
    }
}

class Gato implements Animal{
    hacerSonido(): void {
        console.log('Miau')
    }
}

class AnimalFactory {
    static crear(tipo: string): Animal{
        if(tipo === 'perro'){
            return new Perro()
        }
        return new Gato()
    }
}

const perro_1 = AnimalFactory.crear('perro')
perro_1.hacerSonido() */

//Observer
//Los clientes se susbscriben al observador y a medida lo van haciendo si el observador cambia de estado puede notificarles
class Notificador {
    private observadores: Function[] = []

    subscribe(callback: Function){
        this.observadores.push(callback)
    }

    notify(){
        for(let observer of this.observadores){
            observer()
        }
    }
}

const sistema = new Notificador()
sistema.subscribe(() => {console.log('email enviado')})
sistema.subscribe(() => {console.log('sms enviado')})

sistema.notify()