/* 
Comentario multilinea
*/
// Comentario de una sola linea


/* 
TIPOS DE DATOS primitivos
*/
/* 
string: texto alafunumerico sin limite de caracteres
Se escriben con: '', ""
EJEMPLOS: 'hola', 'matias', "3", "true"

number: numeros enteros sin limite
Se escriben como numeros sin comillas
EJEMPLOS: 1, 9, -1, 0, 3.14, -3.14, NaN (Representa un numero que no puede existir, por ejemplo si intento transformar a numero un 'hola' esto no tiene una version numerica. Entonces se usa NaN)

boolean: Verdadero o falso
Van con el nombre true o false sin comillas
EJEMPLOS: true, false

undefined: Que cierto dato no fue definido
EJEMPLO: undefined

null: Nulidad o ausencia de dato
EJEMPLO: null
*/

/* 
typeof es una palabra reservada que nos indica que tipo de dato es cierto dato, nos devuelve un string con el nombre del tipo de dato
typeof('hola') => 'string'
typeof(1) => 'number'
typeof(null) => 'object'
*/


/* 
Constructores de datos o transformadores
Te permiten tranformar x dato (EL QUE SEA) a otro tipo de dato
String()
Number()
Boolean()
    Hay que tener en cuenta que solo hay ciertos datos que al transformarlos a boolean dan false
    Falsy o datos falsos
        - 0
        - ''
        - NaN
        - undefined
        - null
        - false
    truthy o datos verdaderos:
        Todos los datos que no sean falsy
    
*/

/* let nombre = 'pepe'

if(nombre){
    console.log("hay nombre")
}
else{ 
    console.log('No hay nombre')
} */

/* 
Comparadores
Nos permiten comparar datos
Siempre devuelven boolean
- Igualdad: ==
- Diferencia: !=
- Estricta igualdad: ===
- Estricta diferencia: !==
- mayor, menor a: <, >
- Mayor o igual, menor o igual a: <=, >=

Excepciones:
    NO SE PUEDE COMPARAR CON NaN, es INCOMPARABLE, NISIQUIERA CONSIGO MISMO
        NaN == NaN
        false
        Para eso existe el isNaN
            isNaN(NaN)
            true
            isNaN(1)
            false
            isNaN('hola')
            true
*/

/* 
Variables: Nos permiten almacenar datos en memoria
Hay 3 tipos: 
    VAR => Hoy en dia no se usa
        var nombre = 'pepe'
        
        se puede reasignar
        nombre = 'juan'

        se puede redeclarar
        var nombre = 'pepe'

    LET: Se usa mucho
        let nombre = 'juan'

        se puede reasignar
        nombre = 'juan'

        NO se puede redeclarar

        let nombre = 'pepe'
    CONST: Se usa mucho pero de momento no
        const pi = 3.14

        NO se puede declarar sin valor inicial
        const pi

        NO se puede reasignar
        pi = 3.15

        NO se puede redeclarar
        const pi = 3.14
*/


