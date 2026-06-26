import type { Paso } from './../models/Paso';
import { PasoComponent } from "../components/PasoComponent";
import { assert, assertEquals } from "./assertions";
import { test } from "./runner";


test(
    'PasoComponent - Deberia renderizar titulo, descripcion y estado en el DOM', 
    () => {
        const pasoData: Paso = {
            titulo: 'Crear DB',
            descripcion: 'Lorem',
            fecha_creacion: new Date(),
            estado: 'in-progress',
            fecha_en_progreso: new Date()
        }

        const component = new PasoComponent(pasoData)
        const element = component.render()

        //ACA VALIDAMOS

        //Confirmar/Aseguro que element es una instancia de HTMLElment
        assert(
            element instanceof HTMLElement,
            'El component renderizado debe ser una instancia de HTMLElement'
        )

        assertEquals(
            element.className,
            "paso",
            "la clase del elemento contenedor deberia ser paso"
        )


        const tituloElement = element.querySelector('h4')
        const descriptionElement = element.querySelector('p')
        const estadoElement = element.querySelector('span')

        assert(tituloElement != null, 'El componente deberia contener un elemento h4 para el titulo')
        assert(descriptionElement != null, 'El componente deberia contener un elemento p para la descipcion')
        assert(estadoElement != null, 'El componente deberia contener un elemento span para el estado')

        assertEquals(
            tituloElement!.textContent,
            'Crear DB',
            "El titulo renderizado no coincide con el modelo"
        )

        assertEquals(
            descriptionElement!.textContent,
            'Lorem',
            'La descripcion renderizada no coincide con el modelo'
        )

        assertEquals(
            estadoElement!.textContent,
            'in-progress',
            'El estado renderizado no coincide con el modelo'
        )

    }
)
