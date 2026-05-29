/* 
BLOQUES TEMATICOS: 
LocalStorage
SessionStorage
Serializacion
Estado local
IndexedDB

Una caracteristica importante de el almacenamiento local es que no pasa por medio de ningun servidor.
*/


//LocalStorage
/* 
Almacenamiento persistente en el navegador del dispositivo.
Esto significa que no se borra ni al cerrar la pestaña ni el navegador (Nisiquiera aunque apagemos la PC). La unica forma de borrarlo es reinstalando el navegador o mediante la API.

Guarda strings en una tabla clave valor (Key-Value). Cada clave hace referencia a un valor.

Con getItem puedo llamar a un valor guardado en localStorage, si el valor no existe, devolvera null
Con setItem podemos cambiar/guardar un valor
Con removeItem() podemos eliminar un valor por su clave
*/
//Caso de uso: Seleccionar el tema de la pagina (Modo oscuro/claro)
/* const THEME_LOCALSTORAGE_KEY = 'theme'


function chageThemeTo(mode: "dark" | 'light'): void{
  localStorage.setItem(
    THEME_LOCALSTORAGE_KEY,
    mode
  )
}

function getTheme (): string{
  const current_theme = localStorage.getItem(THEME_LOCALSTORAGE_KEY)
  if(!current_theme){
    chageThemeTo('light')
    return 'light'
  }
  return current_theme
} */



//sessionStorage
/* 
Almacenamiento persistente en la sesion del navegador del dispositivo.
Esto significa que no se borra ni al cerrar la pestaña ni el navegador (Si cuando cerremos la sesion). La unica forma de borrarlo es cerrando sesion del navegador o mediante la API.

Guarda strings en una tabla clave valor (Key-Value). Cada clave hace referencia a un valor.

Con getItem puedo llamar a un valor guardado en localStorage, si el valor no existe, devolvera null
Con setItem podemos cambiar/guardar un valor
Con removeItem() podemos eliminar un valor por su clave
*/
/* 
const profile = {
  theme: "light",
  username: 'pepe',
  language: 'ES-ar'
}
 */
//Quiero guardar esta data en el sessionStorage
//Si queremos guardar un objeto, fecha, array etc debemos serializarlo (Transformar el dato objeto (ej) en un string, para que sea compatible con el sessionStorage)
//const serialized_profile = JSON.stringify(profile)

//sessionStorage.setItem('profile', serialized_profile)
/* 
const serialized_profile = sessionStorage.getItem('profile')
if(serialized_profile){
  const normalized_profile = JSON.parse(serialized_profile)
  console.log(normalized_profile.language)
} */

//indexedDB
/* 
Es una MiniDB dentro del navegador
Casos de uso:
  - Si tenes una aplicacion donde no queres guardar datos en la nube, sino que es de uso local. Ejemplo excalidraw.
  - Para caches, imagemos que tenemos unos x datos que sabemos que SI o SI se actualizan quincenalmente o mensualmente. Entonces lo que hacemos para evitar que un mismo usuario cargue muchas veces el mismo dato que sabemos que sera el mismo hoy, mañana y asi hasta la fecha limite. Lo guardamos en indexedDB para no sobresaturar el servidor.
*/

//Abrir la DB
//IndexedDB necesita de un proceso de apertura

const schoolRequest = indexedDB.open('schoolDB', 1)


//Definimos la estructura, ej: cada student tendra su id
schoolRequest.onupgradeneeded = () => {
  const schoolDB = schoolRequest.result
  schoolDB.createObjectStore(
    'students',
    {
      keyPath: 'id'
    }
  )
}


//Guardar un student

schoolRequest.onsuccess = () => {
  console.log("Base de datos abierta")
/*   const schoolDB = schoolRequest.result
  const transaccion = schoolDB.transaction('students', 'readwrite')
  const store = transaccion.objectStore('students')

  store.add({
    id: 1,
    name: "Lucia",
    grade: 9
  })

  transaccion.oncomplete = () => console.log("Alumno guardado") */

  const schoolDB = schoolRequest.result
  const transaccion = schoolDB.transaction('students', 'readonly')
  const store = transaccion.objectStore('students')
  const getRequest = store.get(1);

  getRequest.onsuccess = () => {
    console.log(getRequest.result)
  }
}

