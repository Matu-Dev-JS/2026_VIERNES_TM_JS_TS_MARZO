/* function sumar (a: number, b: number): number{
    return a + b
}

function restar (a: number, b: number): number{
    return a - b
}

export function multiplicar (a: number, b: number): number{
    return a * b
}

function dividir (a: number, b: number): number{
    return a / b
}


export {sumar, restar}

export default dividir */

export namespace CustomMath {
    export namespace Arithmetic{
        export function sumar (a: number, b: number): number{
            return a + b
        }
        
        export function restar (a: number, b: number): number{
            return a - b
        }
        
        export function multiplicar (a: number, b: number): number{
            return a * b
        }
        
        export function dividir (a: number, b: number): number{
            return a / b
        }
    }

    export namespace Geometry{
        export function squareArea (side: number): number{
            return side * side
        }
    }
}
