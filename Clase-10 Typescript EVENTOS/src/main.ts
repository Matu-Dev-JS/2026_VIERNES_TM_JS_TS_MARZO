/* 
BLOQUES TEMATICOS: 
Eventos: permiten interacción con el usuario.
Delegación: optimiza la escucha en múltiples elementos.
Prevención: evita comportamientos no deseados.
Feedback visual: mejora la experiencia de usuario.
*/

//buscalo pero si lo encontras no es un elemento cualquiera, es un button
//const btn_add_to_cart = document.getElementById("btn") as HTMLButtonElement;


/* 
addEventListener es un metodo asociado a todos los elementos
Recibe 2 parametros
  1. Event type / key, es un string con el nombre del evento
    Lista de eventos disponibles: https://www.w3schools.com/jsref/dom_obj_event.asp
  2. Handler, es una funcion que se llamara cuando el evento ocurra
*/

//Esta funcion maneja la logica del click del boton de agregar al carrito
/* function handleAddToCart (){
  console.log("Producto añadido")
}

btn_add_to_cart.addEventListener(
  'click',
  handleAddToCart
)

btn_add_to_cart.addEventListener(
  'contextmenu',
  () => {
    console.log("Se hizo click derecho")
  }
) */
const products = [
  {
    id: 1,
    title: "Producto 1",
    price: 100
  },
  {
    id: 2,
    title: "Producto 2",
    price: 200
  },
  {
    id: 3,
    title: "Producto 3",
    price: 300
  }
]

const productContainer_HTML = document.querySelector('.product-container')


/* 
El atributo data es para guardar informacion dentro de un elemento del HTML
Vos podes guardar las cosas que quieras, como ids, titulos etc
*/
if(productContainer_HTML){
  let inner_HTML = ''
  for(const product of products){
    inner_HTML = inner_HTML + `<div>
      <h3>${product.title}</h3>
      <p>Precio: $${product.price}ARS</p>
      <button class='cart-btn' data-id="${product.id}">Añadir al carrito</button>
      <hr>
    </div>`
  }
  productContainer_HTML.innerHTML = inner_HTML

  const cart_btns = productContainer_HTML.querySelectorAll('.cart-btn')
  for(const cart_btn of cart_btns){
    cart_btn.addEventListener(
      'click', 
      (event) => {
        //El handler tiene SIEMPRE acceso al event, el event es un objeto asociado al evento en si mismo y nos trae informacion de el
        //Entre otras cosas el event tiene al target, que es la referencia del elemento que desencadeno el evento
        console.log(event.target)
        console.log("producto añadido")
        const cart_btn = event.target as HTMLButtonElement
        cart_btn.disabled = true
        cart_btn.innerText = 'Añadiendo...'
        setTimeout(
          () => {
            cart_btn.innerText = 'Producto añadido'
          },
          2000
        )
        const id_product = cart_btn.getAttribute('data-id')
        console.log(id_product)
      }
    )
  }
}

const contactForm_HTML = document.getElementById("contact-form") as HTMLFormElement;

/* 
Los eventos aveces tienen comportamientos por defecto, 
  ej:
    Si selecciono un texto y hago control + c ese texto se copiara, ESO PASA POR DEFECTO
    Si envio un formulario la pagina se recargara
Podemos prevenir este comportamiento facilmente invocando a .preventDefault()
*/

if(contactForm_HTML){
  contactForm_HTML.addEventListener(
    'submit',
    (event) => {
      
      event.preventDefault()

      console.log('Se envio el formulario')
      const form_HTML = event.target as HTMLFormElement
      
      const submit_btn = form_HTML.querySelector('.submit-btn') as HTMLButtonElement
      submit_btn.disabled = true
      submit_btn.innerText = 'Enviando...'

      setTimeout(
        () => {
          submit_btn.innerText = 'Enviado'
        },
        2000
      )

      const message = form_HTML.message
      console.log(message.value)
    }
  )
}