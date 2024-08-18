const { createApp, ref } = Vue;

createApp({
    setup() {
        const titulo = ref('Parcial-1 Contador');
        const cuenta = ref(0);

        const aumentar = () => {
            cuenta.value++;
        };

        const restar = () => {
            cuenta.value--;
        };

        return {
            titulo,
            cuenta,
            aumentar,
            restar
        };
    }
}).mount('#app');
