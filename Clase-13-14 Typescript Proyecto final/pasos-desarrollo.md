## App gestor tareas

Fases desarrollo:
    - Definir proyecto
        - Definir flujos de usuario (que tipos de usuario hay en la app y que puede hacer cada uno)
        - Definir estructura de datos
        - Definir UI (No hablo de estilos sino mas bien un boceto de como se debe ver la app y las acciones)
        - Definir tecnologias
    - Crear repositorio
    - Desarrollar

En local storage debemos almacenar:
Estructura de datos:
Tarea: {
    titulo,
    descripcion,
    fecha_creacion,
    fecha_completado,
    estado: 'completed' | 'in-progress' | 'un-started',
    pasos: Paso[]
}

Paso: {
    titulo,
    descripcion,
    fecha_creacion,
    fecha_completado,
    fecha_en_progreso,
    estado: 'completed' | 'in-progress' | 'un-started'
}