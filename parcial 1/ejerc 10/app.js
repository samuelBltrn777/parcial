

//composition
const { createApp, ref, watch } = Vue;

const app = createApp({
    setup() {
        const titulo = ref('Componente con Watcher');  // Título del componente
        const nombre = ref('');  // Nombre que ingresa el usuario
        const mensaje = ref('');  // Mensaje que se mostrará en la pantalla

        // Observador (watcher) que monitorea cambios en la variable 'nombre'
        watch(nombre, (nuevoNombre, nombreAntiguo) => {
            // Si hay un nuevo nombre, se actualiza el mensaje de bienvenida
            if (nuevoNombre) {
                mensaje.value = `¡Hola, ${nuevoNombre}! Bienvenido/a.`;
            } else {
                // Si el campo está vacío, se limpia el mensaje
                mensaje.value = '';
            }
            // Registrar en la consola el cambio de nombre
            console.log(`El nombre cambió de "${nombreAntiguo}" a "${nuevoNombre}"`);
        });

        // Retornar las variables para hacerlas accesibles en la plantilla
        return {
            titulo,
            nombre,
            mensaje
        };
    }
});

app.mount('#app');

