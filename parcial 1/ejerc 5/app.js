// Importamos las funcionalidades necesarias desde Vue.js
const { createApp, ref } = Vue;

const ListaTareas = {
    template: `
        <div>
            <h2>Lista de Tareas</h2>
            <!-- Campo de entrada para agregar una nueva tarea -->
            <input v-model="nuevaTarea" placeholder="Agregar una nueva tarea" />
            <!-- Botón para añadir la tarea a la lista -->
            <button @click="agregarTarea">Agregar Tarea</button>

            <!-- Lista donde se muestran las tareas agregadas -->
            <ul>
                <!-- Iteramos sobre la lista de tareas y las mostramos en pantalla -->
                <li v-for="(tarea, index) in tareas" :key="index">
                    {{ tarea }}
                    <!-- Botón para eliminar una tarea específica -->
                    <button @click="eliminarTarea(index)">Eliminar</button>
                </li>
            </ul>
        </div>
    `,
    setup() {
        // Aquí es donde almacenamos la nueva tarea que el usuario escriba
        const nuevaTarea = ref('');

        // Y aquí es donde guardamos todas las tareas que el usuario agregue
        const tareas = ref([]);

        // Función para agregar una nueva tarea a nuestra lista
        const agregarTarea = () => {
            // Verificamos si el campo de la nueva tarea no está vacío
            if (nuevaTarea.value.trim()) {
                // Si tiene contenido, lo agregamos a la lista de tareas
                tareas.value.push(nuevaTarea.value.trim());
                // Luego limpiamos el campo de entrada para que esté listo para otra tarea
                nuevaTarea.value = '';
            }
        };

        // Función para eliminar una tarea de la lista
        const eliminarTarea = (index) => {
            // Usamos el índice de la tarea para eliminarla del array de tareas
            tareas.value.splice(index, 1);
        };

        // Devolvemos las variables y funciones que queremos usar en nuestro template
        return {
            nuevaTarea,
            tareas,
            agregarTarea,
            eliminarTarea
        };
    }
};

// Aquí creamos nuestra aplicación Vue y registramos el componente ListaTareas
createApp({
    components: {
        ListaTareas
    }
    // Finalmente, montamos nuestra aplicación en el contenedor con el id "app"
}).mount('#app');
