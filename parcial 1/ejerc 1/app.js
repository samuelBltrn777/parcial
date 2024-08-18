const { createApp, reactive, computed } = Vue;
// aca se define el componente llamado Bienvenida
const Bienvenida = {
    template: `
        <div>
            <h2>{{ mensaje }}</h2>
            <input v-model="usuario.nombre" placeholder="Escribe tu nombre" />
        </div>
    `,
    setup() {
        const usuario = reactive({ nombre: '' });

        //Aca se muestra el nombre que se le pide y se muestra.
        const mensaje = computed(() => {
            return usuario.nombre ? `¡Bienvenido, ${usuario.nombre}!` : '¡Bienvenido a mi portal! Escribe tu nombre.';
        });
        //Aquí se devuelven usuario y mensaje desde setup, haciéndolos
        // disponibles en el template del componente.
        return {
            usuario,
            mensaje
        };
    }
};
//aca es donde se crea la app vue
createApp({
    components: {
        Bienvenida
    }
}).mount('#app');
