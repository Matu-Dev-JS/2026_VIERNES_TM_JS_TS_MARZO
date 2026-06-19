
export type EstadoPasos = 'completed' | 'in-progress' | 'un-started'

export interface Paso {
    titulo: string;
    descripcion: string;
    fecha_creacion: Date;
    fecha_completado?: Date;
    fecha_en_progreso?: Date;
    estado: EstadoPasos;
}