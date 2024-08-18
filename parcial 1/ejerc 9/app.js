// Composition 
const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const nombre = ref('');
        const apellido = ref('');

        // Propiedad computada para concatenar nombre y apellido
        const nombreCompleto = computed(() => {
            return ${nombre.value} ${apellido.value}.trim();
        });

        // Retornamos las variables y la propiedad computada para usarlas en la plantilla
        return {
            nombre,
            apellido,
            nombreCompleto
        };
    }
}).mount('#app');