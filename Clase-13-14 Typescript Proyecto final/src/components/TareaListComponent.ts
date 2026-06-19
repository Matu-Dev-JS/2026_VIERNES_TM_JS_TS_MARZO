import { TareaService } from "../services/TareaService"
import { TareaComponent } from "./TareaComponent"


export class TareaListComponent {
    private container = document.createElement('div')
    private service = new TareaService()

    render(): HTMLElement{
        this.refresh()
        return this.container
    }

    private refresh(): void{
        this.container.innerHTML = ''
        const tareas = this.service.getAll()
        tareas.forEach(
            (tarea, index) => {
                const component = new TareaComponent(
                    tarea, 
                    () => {
                        this.service.delete(index),
                        this.refresh()
                    }
                )
                this.container.appendChild(
                    component.render()
                )
            }
        )

    }
}