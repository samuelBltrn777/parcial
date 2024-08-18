// Importamos funciones clave de Vue
const { createApp, ref, watchEffect } = Vue;

// Creamos un "composable" llamado useTheme para manejar la lógica del tema
function useTheme() {
  // Creamos una variable reactiva que indica si el modo oscuro está activado o no
  const isDarkMode = ref(false); // Por defecto, empezamos con el modo claro

  // Función para alternar entre el modo oscuro y el modo claro
  function toggleTheme() {
    isDarkMode.value = !isDarkMode.value; // Cambiamos el valor a lo contrario de lo que es ahora
    // Aplicamos la clase 'dark' o 'light' al body de la página, según el estado de isDarkMode
    document.body.className = isDarkMode.value ? 'dark' : 'light';
  }

  // Sincronizamos el tema al cargar la página o cada vez que isDarkMode cambie
  watchEffect(() => {
    // Aseguramos que la clase correcta (dark o light) se aplique al body
    document.body.className = isDarkMode.value ? 'dark' : 'light';
  });

  // Devolvemos la variable y la función para que puedan ser usadas en otros componentes
  return {
    isDarkMode,  // El estado del tema (oscuro o claro)
    toggleTheme, // La función para alternar entre los temas
  };
}

// Definimos el componente principal de nuestra aplicación
const App = {
  setup() {
    // Utilizamos el composable useTheme para manejar el tema en nuestro componente
    const { isDarkMode, toggleTheme } = useTheme();

    // Retornamos el estado del tema y la función para alternarlo, para usarlos en el template
    return {
      isDarkMode,  // Estado actual del tema (oscuro o claro)
      toggleTheme, // Función para alternar el tema cuando se haga clic en el botón
    };
  },
  template: `
    <div>
      <!-- Botón para cambiar el tema, muestra el nombre del tema al que cambiará -->
      <button @click="toggleTheme">
        Cambiar a {{ isDarkMode ? 'Tema Claro' : 'Tema Oscuro' }}
      </button>
    </div>
  `,
};

// Creamos la aplicación Vue y la montamos en el elemento con id "app"
createApp(App).mount('#app');
