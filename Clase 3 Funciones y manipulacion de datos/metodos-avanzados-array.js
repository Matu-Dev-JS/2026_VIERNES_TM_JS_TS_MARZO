const productos = [
    {
        title: 'Cafetera',
        id: 1,
        price: 200
    },
    {
        title: 'Termo',
        id: 2,
        price: 100
    },
    {
        title: 'TV Samsung',
        id: 3,
        price: 250
    },
    {
        title: 'Mesa ratona',
        id: 4,
        price: 110
    },
    {
        title: 'Termo lumilagro',
        id: 5,
        price: 120
    }
]


//Quiero obtener los productos entre 90 y 130 pesos

//Forma artesanal
/* function filtrarProductosPorPrecio (productos, precio_minimo, precio_max){
    const productos_filtrados = []
    for(const producto of productos){
        if(producto.price >= precio_minimo && producto.price <= precio_max){
            productos_filtrados.push(producto)
        }
    }
    return productos_filtrados
}


console.log(filtrarProductosPorPrecio(productos, 90, 130))
 */

//Forma con metodos avanzados
/* 
Filter recorre la lista de productos, por cada producto invocara a la callback y la callback dependiendo de que retorne definira que sucuedera (Si se agrega o no)
Filter retorna una lista de elementos nueva con los elementos que hayan cumplido con la condicion
*/

/* const productos_filtrados = productos.filter(
    (elemento) => {
        return elemento.price >= 80 && elemento.price <= 130
    }
)

console.log(productos_filtrados) */


/* const producto_1 = productos.find(
    (product) => product.id === 1
)
console.log(producto_1) */


//Quiero transformar mi array a español
/* 
Recorre el array y por cada elemento ejecuta la callback, el retorno de la callback sera guardado en un nuevo array
*/

const productos_spanish = productos.map(
    (producto) => {
        return {
            titulo: producto.title,
            price: producto.price,
            id: producto.id
        }
    }
)

console.log(productos_spanish)