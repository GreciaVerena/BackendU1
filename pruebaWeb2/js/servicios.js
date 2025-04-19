function cargarServicios() {
    const container = document.getElementById('servicios-container');
    
    fetch('/pruebaWeb1/servicios.php') // no necesitas headers aquí, ya van en PHP
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar los servicios');
        }
        return response.json();
    })
    .then(data => {
        const servicios = data.data; // aquí accedemos al array real
        
        container.innerHTML = '';
        container.removeAttribute('style');
        container.className = 'servicios-container';
        
        const serviciosAMostrar = servicios.slice(0, 4);
        
        serviciosAMostrar.forEach(servicio => {
            const servicioElement = document.createElement('div');
            servicioElement.className = 'servicio-card';
            
            servicioElement.innerHTML = `
                <h3>${servicio.titulo.esp}</h3>
                <p>${servicio.descripcion.esp}</p>
                <a href="#" class="btn-small">Ver más</a>
            `;
            
            container.appendChild(servicioElement);
        });
    })
    .catch(error => {
        container.innerHTML = `
            <div class="error-message">
                <p>Error al cargar los servicios: ${error.message}</p>
                <p>Por favor, intente nuevamente más tarde.</p>
            </div>
        `;
        console.error('Error:', error);
    });
}

document.addEventListener('DOMContentLoaded', cargarServicios);