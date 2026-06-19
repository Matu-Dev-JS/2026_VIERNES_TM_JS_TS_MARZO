import type { Paso } from "../models/Paso";



export class PasoComponent {
    constructor (private paso: Paso){}
    render(): HTMLElement{
        const div = document.createElement('div')
        div.className = 'paso'
        div.innerHTML = `
            <h4>${this.paso.titulo}</h4>
            <p>${this.paso.descripcion}</p>
            <span>${this.paso.estado}</span>
        `
        return div
    }
}