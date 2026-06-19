import type { Tarea } from "../models/Tarea";
import { PasoComponent } from "./PasoComponent";


export class TareaComponent {
    constructor(
        private tarea: Tarea,
        private onDelete: () => void
    ){}
    render (): HTMLElement{
        const card = document.createElement('article')
        card.className = 'tarea'
        card.innerHTML = `
            <h2>${this.tarea.titulo}</h2>
            <p>${this.tarea.descripcion}</p>
            <small>
                Estado: ${this.tarea.estado}
            </small>
            <button class='delete-btn'>Eliminar</button>
            <h3>Pasos:</h3>
        `

        const delete_button = card.querySelector('.delete-btn')
        delete_button?.addEventListener(
            'click',
            () => {
                this.onDelete()
            }
        )

        //Contenedor de pasos
        const pasosContainer = document.createElement('div')

        //Por cada paso de la tarea
        this.tarea.pasos.forEach(
            (paso) => {
                //Instaciamos el el componente de paso
                const pasoComponent = new PasoComponent(paso)
                //Añadimos el paso al contenedor de pasos
                pasosContainer.appendChild(
                    pasoComponent.render()
                )
            }
        )

        card.appendChild(pasosContainer)
        return card
    }
}