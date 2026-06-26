/* 
Sirve para validar el comporamientro de nuestro codigo

Si una validacion falla, estas fucniones lanzan un objeto de error con un mensaje descriptivo
*/

export function assert (condition: boolean, message?: string): void{
    if(!condition){
        throw new Error(message || 'La asercion fallo (se esperaba un valor verdadero)')
    }
}

export function assertEquals<T>(actual: T, expected: T, message?: string):void{
    if(actual !== expected){
        throw new Error(message || `Se esperaba ${expected}, pero se obtuvo ${actual}`)
    }
}

export function assertNotEquals<T>(actual: T, expected: T, message?:string): void{
    if(actual === expected){
        throw new Error(message || `No se esperaba que ${actual} fuera igual a ${expected}`)
    }
}

export function assertThrows (fn: () => void, expectedMessagePart?: string, message?:string): void{
    let threw = false

    try{
        fn()
    }
    catch(error){
        threw = true
        if(expectedMessagePart && error instanceof Error){
            if(!error.message.includes(expectedMessagePart)){
                throw new Error(
                    message || `Se esperaba que el mensaje contuviera "${expectedMessagePart}", pero se obtuvo: "${error.message}"`
                )
            }
        }
    }

    if(!threw){
        throw new Error(message || "Ser esperaba que la funcion lanzara un error pero no lo hizo")
    }
}