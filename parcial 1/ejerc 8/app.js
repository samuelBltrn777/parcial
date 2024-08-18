//composition api
const { createApp, ref } = Vue;

// Función de composition para manejar la autenticación
const usarAutenticacion = () => {
    // Estado reactivo para el estado de inicio de sesión
    const estaLogueado = ref(false);

    // Función para cambiar el estado de inicio de sesión
    const toggleLogin = () => {
        estaLogueado.value = !estaLogueado.value;
    };

    // Retornamos las variables y funciones que necesitamos
    return {
        estaLogueado,
        toggleLogin
    };
};

const app = createApp({
    setup() {
        // Título reactivo de la aplicación
        const titulo = ref('Renderizado Condicional');

        // Usamos nuestra función de composition de autenticación
        const { estaLogueado, toggleLogin } = usarAutenticacion();

        return {
            titulo,
            estaLogueado,
            toggleLogin
        };
    }
});


app.mount('#app');