import type { Paso } from "./Paso";

export type EstadoTarea = 'completed' | 'in-progress' | 'un-started'

export interface Tarea {
    titulo: string;
    descripcion: string;
    fecha_creacion: Date;
    fecha_completado?: Date;
    estado: EstadoTarea;
    pasos: Paso[]
}