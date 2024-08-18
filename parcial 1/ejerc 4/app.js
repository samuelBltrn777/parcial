const { createApp, ref } = Vue;

const MensajeEvento = {
    template: `
        <div>
            <div v-for="(input, index) in inputs" :key="index" class="input-group">
                <input v-model="input.valor" placeholder="Escribe algo" />
            </div>
            <button @click="agregarInput">Agregar </button>
            <br>
            <button @click="mostrarAlerta">Mostrar Alerta</button>
        </div>
    `,
    setup() {
        // este es el estado reactivo para almacenar inputs
        const inputs = ref([{ valor: '' }]);

        // Esta es la funcion para agregar un nuevo input 
        const agregarInput = () => {
            inputs.value.push({ valor: '' });
        };

        // Esta es la funcion que muestra todos los input en forma de alerta
        const mostrarAlerta = () => {
            const valores = inputs.value.map(input => input.valor).join(', ');
            alert(`Los valores ingresados son: ${valores}`);
        };

        return {
            inputs,
            agregarInput,
            mostrarAlerta
        };
    }
};

createApp({
    components: {
        MensajeEvento
    }
}).mount('#app');
