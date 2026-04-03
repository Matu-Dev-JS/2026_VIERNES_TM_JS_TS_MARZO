/* 
Son estructuras que nos permiten listar cosas
EJ:
- Una lista de nombres de alumnos
- Una lista de paises
- Una lista de productos

Sinonimos: Array, lista, matriz, coleccion
Los arrays SON ORDENADOS, se ordenan por el "INDICE",
el indice indica que posicion se tiene dentro de la lista. 
El indice empieza en 0
El indice nos sirve para poder obtener algun valor de la lista, a los valores de la lista se los accede por indice
Los arrays tienen la propiedad length, que nos indica la cantidad de elementos que hay en la lista
*/

const alumnos = [
    'pepe',
    'juan',
    'maria'
]
//console.log("En la lista hay " + alumnos.length + ' alumnos')

const productos = [
    {
        title: 'Cafetera',
        id: 1
    },
    {
        title: 'Termo',
        id: 2
    }
]

//Para manipular un array usamos metodos de array:
//Si quiero agregar al final del array uso .push()

/* productos.push(
    {
        title: 'PC Escritorio',
        id: 3
    }
)
 */

//Si quiero agregar al principio del array uso .unshift()
/* 
productos.unshift(
    {
        title: 'PC Escritorio',
        id: 3
    }
) */

//Si quiero eliminar el ultimo elemento del array
//productos.pop()

//Si quiero eliminar al primer elemento del array
//productos.shift()

//Si quiero obtener el indice de x elemento en el array puedo usar indexOf
//console.log(alumnos.indexOf('maria'))

/* const cafetera = productos[0]
console.log("la cafetera esta con indice " + productos.indexOf(cafetera)) */

//Si quiero saber si x valor esta dentro la lista
//console.log(alumnos.includes('pepe'))

//Si quiero eliminar agregar algun valor de la lista
//Splice

//Eliminar a cafetera
//productos.splice(0, 1)


//Agregar a pc escritorio entre termo y cafetera
//productos.splice(1, 0, {title: "PC escritorio", id: 3})

//console.log(productos)