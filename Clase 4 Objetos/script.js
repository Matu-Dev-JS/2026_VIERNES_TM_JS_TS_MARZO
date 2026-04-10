//TEMARIO:

//Objetos
//Que son?
//Como se definen
//Atributos
//Metodos
//Encadenado condicional
//Desestructuracion
//For in


/* 
Un objeto es un dato que tiene:
    - Estado:
        - Los atributos que describen al dato
        - EJ: Una uva tiene color morado, es chica, es circular y sabe dulce
        const uva = {color: 'morado', tamaño: 'chico', figura: 'circular', sabor: 'dulce'}
    - Comportamiento
        - Las acciones que puede tomar tu objeto, define que cosas puede hacer
        EJ: Tengo una uva, si pasan 1 semana de su cosecha se pudre
        const uva = {
            color: 'morado', 
            tamaño: 'chico', 
            figura: 'circular', 
            sabor: 'dulce', 
            cosechado_en: new Date('2026', '3', '1'),
            verificarSiEstaFermentado: function (){
                //Creamos la fecha de fermento a partir de la fecha de cosecha
                const fecha_de_fermento = new Date(this.cosechado_en)
                //Sumamos 7 dias a la fecha de fermento
                fecha_de_fermento.setDate(fecha_de_fermento.getDate() + 7)

                //La fecha actual es mayor o igual a la fecha de fermentacion
                if(new Date() >= fecha_de_fermento){
                    console.log("la uva ha fermentado")
                }
                else{ 
                    console.log("La uva esta bien")
                }
            }
}
*/



const persona = {
    nombre: 'Pepe',
    pais: {
        nombre: 'Argentina',
        continente: "America del sur"
    },
    edad: 35,
    presentarse: function () {
        console.log("hola, mi nombre es " + this.nombre)
    }
}

//Podemos modificar las propiedades
//persona.nombre = 'Juan'

//Podemos eliminar una propiedad
//delete persona.nombre

//Podemos extender el objeto (crear nuevas propiedades)
//persona.edad = 70

//No podemos acceder a una propiedad inexistente
//persona.edad //Esto devuelve undefined'
//persona.pais.nombre // "Argentina" Esto funciona bien
//persona.pc.ram //Esto LANZA ERROR 
//Encadenado condicional, si existe la propiedad intentara accederla, sino devuelve undefined
//console.log(persona?.pc?.ram)


/* function entevistarEmpleado ({nombre: nombre_empleado, edad: edad_empleado}){
    //const {nombre: nombre_empleado} = persona
    console.log("-- Inicia entrevista --")
    console.log(`Hola ${nombre_empleado}, yo soy juan, voy a ser tu entrevistador.`)
    console.log(`Me dijeron que tenes ${edad_empleado} años`)
}

entevistarEmpleado(persona) */

/* const datos = {
    'D.N.I': 11222333,
    'Nombre completo': 'pepe'
} */

//Normalizamos con desestructuracion
/* const {
    ['D.N.I']: dni,
    ['Nombre completo']: nombre
} = datos 
const dato_normalizado = {
    dni,
    nombre
} */
/* const datos = {
    'D.N.I': 11222333,
    'Nombre completo': 'pepe'
}

function comentarDatos (){
    for(let clave in datos){
        console.log(clave + ': ' + datos[clave])
    }
}

comentarDatos() */

const persona_2 = {
    nombre: "Pepe",
    edad: 40
}

for(let propiedad in persona_2){
    console.log(propiedad + ': ' + persona_2[propiedad])
}