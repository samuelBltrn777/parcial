const { createApp, ref } = Vue;

const MostrarOcultarMensaje = {
    template: `
        <div>
            <button @click="toggleMensaje">
                {{ mostrar ? 'Ocultar Mensaje' : 'Mostrar Mensaje' }}
            </button>
            <p v-if="mostrar">Samuel Ernesto Beltran Castillo.</p>
        </div>
    `,
    setup() {
        // aca esta el estado reactivo para controlar la visibilidad del mensaje
        const mostrar = ref(false);

        // esta es la funcion para alternar el estado de visibilidad
        const toggleMensaje = () => {
            mostrar.value = !mostrar.value;
        };

        return {
            mostrar,
            toggleMensaje
        };
    }
};

createApp({
    components: {
        MostrarOcultarMensaje
    }
}).mount('#app');
