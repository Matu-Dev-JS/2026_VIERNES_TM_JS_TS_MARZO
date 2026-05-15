/* 
BLOQUES TEMATICOS: 
DOM: representación estructurada de la interfaz.
Selección: acceder a elementos para modificarlos.
TextContent e innerHTML: actualizar información visual.
Inserción: agregar contenido dinámicamente.
Eliminación: gestionar elementos de forma controlada.
Estilos dinámicos: cambiar apariencia en tiempo real.
*/


function obtenerUsuario (){
  return {
    name: 'pepe'
  }
}

/* 
DOM es el document object model, basicamente un objeto que es la reprentacion virtual de nuestro documento.
Cuando enlazamos un JS a x HTML, al interpretarse este archivo de JS se genera automaticamente una variable global llamada document dentro de el. El document es la variable global que guarda esta representacion virtual de TODO lo que sucede en la pagina.

En algun lugar se guarda todo lo que sucede en la pagina, desde color de fondo de un div, hasta los eventos asociados.
*/

/* 
Selección: acceder a elementos para modificarlos.
*/

/* 
.getElementById es el metodo que nos permite seleccionar un elemento del HTML por su ID
*/
//const titulo_HTML = document.getElementById('titulo')

//.querySelector es el metodo que nos permite seleccionar por selector, puede ser por ID, class o element. Solo selecciona al primer elemento que encuentre con x selector
//const titulo_HTML = document.querySelector('.title')

//Si queremos seleccionar a todos los elementos con la clase .title
const titles = document.querySelectorAll('.title')
console.log(titles)
const titulo_HTML = titles[0]

if(titulo_HTML){
  const user_data = obtenerUsuario()
  titulo_HTML.textContent = 'Bienvenido ' + user_data.name
  titulo_HTML.setAttribute('class', 'title')
  /* 
  titulo_HTML.style.backgroundColor = 'red'
  titulo_HTML.style.color = 'white' 
  */
}
else{
  console.error("Elemento con id 'titulo' no encontrado")
}


const buttons = document.querySelectorAll('.btn')

for(const button of buttons){
  button.textContent = 'Haz click'
  button.addEventListener(
    'click',
    () => {
      console.log("Alguien hizo click")
    }
  )
}

const contenedor_HTML = document.getElementById('contenedor')

if(contenedor_HTML){
  contenedor_HTML.innerHTML = `
    <h2 id='subtitulo'>Hola</h2>
    <p>Lorem</p>
    <button>Comprar</button>
  `

  const subtitulo = document.getElementById('subtitulo')

  if(subtitulo){
    subtitulo.textContent = 'Hola mundo'
  }
}


const app = document.getElementById('app')

if(app){
  const ancla = document.createElement('a')
  ancla.textContent = 'Haz click aqui'
  ancla.setAttribute('href', 'https://www.mercadolibre.com.ar/')
  app.appendChild(ancla)

  const btn_especial_HTML = document.querySelector('#btn-especial')
  
  if(btn_especial_HTML){
    app.removeChild(btn_especial_HTML)
  }
  
}


const products = [
  {
    id: 1,
    title: 'tv samsung 47"',
    price: 4000,
    description: 'Buena tv para el mundial'
  },
  {
    id: 2,
    title: 'tv samsung 55"',
    price: 5000,
    description: 'Buena tv para el mundial'
  },
  {
    id: 3,
    title: 'tv samsung 65"',
    price: 6000,
    description: 'Buena tv para el mundial'
  }
]

const product_list = document.getElementById('product-list')

if(product_list){
  let html_content = ''
  for(const product of products){
    html_content = html_content + `
      <div>
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <button>Comprar</button>
      </div>
    `
  }

  //Cada vez que llamamos a innerHTML es una MODIFICACION COSTOSA
  product_list.innerHTML = html_content
}