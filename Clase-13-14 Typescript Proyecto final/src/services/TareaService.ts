import type { Tarea } from "../models/Tarea";

export class TareaService {
    private storageKey = 'tareas';

    getAll (): Tarea[]{
        const data = localStorage.getItem(this.storageKey)

        if(!data){
            return []
        }
        return JSON.parse(data)
    }

    save(tareas: Tarea[]): void{
        localStorage.setItem(
            this.storageKey,
            JSON.stringify(tareas)
        )
    }

    delete(index: number): void{
        const tareas = this.getAll()
        tareas.splice(index, 1)

        this.save(tareas)
    }
}