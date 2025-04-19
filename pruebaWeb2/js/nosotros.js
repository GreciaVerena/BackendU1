// Función para cargar la información de "Nosotros" desde la API
function cargarNosotros() {
    const container = document.getElementById('nosotros-container');
    
    // Usamos nuestra API local para obtener la información
    //fetch('/pruebaWeb1/nosotros', {
    //    method: 'GET'
    //})

    fetch('/pruebaWeb1/nosotros.php')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(nosotros => {
        // Limpiamos el contenedor
        container.innerHTML = '';

        // Verifica si la respuesta contiene datos
        if (!nosotros.data || !Array.isArray(nosotros.data)) {
            throw new Error('La respuesta no contiene datos válidos.');
        }

        // Procesa los datos
        nosotros.data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'nosotros-item';

            itemElement.innerHTML = `
                <h3>${item.titulo.esp}</h3>
                <p>${item.descripcion.esp}</p>
            `;

            container.appendChild(itemElement);
        });
    })
    .catch(error => {
        container.innerHTML = `
            <div class="error-message">
                <p>Error al cargar la información: ${error.message}</p>
                <p>Por favor, intente nuevamente más tarde.</p>
            </div>
        `;
        console.error('Error:', error);
    });
}

// Cargar la información cuando la página esté lista
document.addEventListener('DOMContentLoaded', cargarNosotros);
