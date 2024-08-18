// Importamos Vue y la función ref, que nos permitirá crear variables reactivas
const { createApp, ref } = Vue;

const Calculadora = {
    // Este es el template, la parte visual de nuestra calculadora
    template: `
        <div>
            <h2>Calculadora </h2>
            
            <!-- Campo para el primer número -->
            <input v-model.number="numero1" type="number" placeholder="Número 1" />

            <!-- Campo para el segundo número -->
            <input v-model.number="numero2" type="number" placeholder="Número 2" />

            <!-- Botones para realizar las operaciones -->
            <div>
                
                <br><hr><button @click="operacion('sumar')">Sumar</button>
                <br>
                
                <button @click="operacion('restar')">Restar</button>
                <br>
                
                <button @click="operacion('multiplicar')">Multiplicar</button>
                <br>
                
                <button @click="operacion('dividir')">Dividir</button>
            </div>
           

            <!-- Aquí mostramos el resultado de la operación -->
            <center><h1>Resultado: {{ resultado }}</h1></center>
        </div>
    `,
    // setup() es donde definimos la lógica de nuestra calculadora
    setup() {
        // Estas son nuestras variables reactivas para almacenar los números y el resultado
        const numero1 = ref(0);
        const numero2 = ref(0);
        const resultado = ref(0);

        // Esta función se encargará de realizar la operación correcta según el botón que se haya presionado
        const operacion = (tipo) => {
            if (tipo === 'sumar') {
                // Suma los dos números
                resultado.value = numero1.value + numero2.value;
            } else if (tipo === 'restar') {
                // Resta el segundo número del primero
                resultado.value = numero1.value - numero2.value;
            } else if (tipo === 'multiplicar') {
                // Multiplica los dos números
                resultado.value = numero1.value * numero2.value;
            } else if (tipo === 'dividir') {
                // Divide el primer número por el segundo, pero primero verificamos si el segundo número no es cero para evitar errores
                if (numero2.value !== 0) {
                    resultado.value = numero1.value / numero2.value;
                } else {
                    alert("No se puede dividir por cero");
                }
            }
        };

        // Retornamos las variables y la función que queremos usar en el template
        return {
            numero1,
            numero2,
            resultado,
            operacion
        };
    }
};

// Creamos la aplicación Vue y registramos el componente Calculadora
createApp({
    components: {
        Calculadora
    }
    // Finalmente, montamos la aplicación en el contenedor con id="app"
}).mount('#app');
