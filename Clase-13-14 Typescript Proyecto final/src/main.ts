
import { TareaListComponent } from "./components/TareaListComponent";


localStorage.setItem(
    'tareas',
    JSON.stringify(
        [
            {
                titulo: "Crear aplicacion",
                descripcion: 'Desarrollar un gestor de tareas',
                fecha_creacion: new Date(),
                estado: 'in-progress',
                pasos: [
                    {
                        titulo: 'Diseñar modelos',
                        descripcion: 'Crear interfaces',
                        fecha_creacion: new Date(),
                        estado: 'completed',
                        fecha_completado: new Date()
                    },
                    {
                        titulo: 'Crear componentes',
                        descripcion: "Renderizar HTML",
                        fecha_creacion: new Date(),
                        estado: 'in-progress',
                        fecha_en_progreso: new Date()
                    }
                ]
            },
            {
                titulo: "Crear aplicacion 2",
                descripcion: 'Desarrollar un gestor de tareas',
                fecha_creacion: new Date(),
                estado: 'in-progress',
                pasos: [
                    {
                        titulo: 'Diseñar modelos',
                        descripcion: 'Crear interfaces',
                        fecha_creacion: new Date(),
                        estado: 'completed',
                        fecha_completado: new Date()
                    },
                    {
                        titulo: 'Crear componentes',
                        descripcion: "Renderizar HTML",
                        fecha_creacion: new Date(),
                        estado: 'in-progress',
                        fecha_en_progreso: new Date()
                    }
                ]
            }


        ]
    )
)

const tareas = new TareaListComponent()

const app = document.getElementById('app')

if (app) {
    app.appendChild(
        tareas.render()
    )
}
