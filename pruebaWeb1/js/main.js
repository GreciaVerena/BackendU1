document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    // Function to toggle menu
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }
    
    // Event listener for menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (navMenu.classList.contains('active') && !isClickInsideMenu && !isClickOnToggle) {
            toggleMenu();
        }
    });
    
    // Cargar servicios destacados en la página de inicio
    const destacadosContainer = document.getElementById('destacados-container');
    if (destacadosContainer) {
        cargarServiciosDestacados();
    }
});

// Función para cargar los servicios destacados desde la API
function cargarServiciosDestacados() {
    const container = document.getElementById('destacados-container');
    
    fetch('/pruebaWeb1/servicios.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar los servicios');
        }
        return response.json();
    })
    .then(data => {
        const servicios = data.data; // Acceso al array de servicios
        
        container.innerHTML = '';
        
        // Mostrar solo los primeros 4 servicios destacados
        const serviciosDestacados = servicios.slice(0, 4);
        
        serviciosDestacados.forEach(servicio => {
            const servicioElement = document.createElement('div');
            servicioElement.className = 'servicio-card';
            
            servicioElement.innerHTML = `
                <h3>${servicio.titulo.esp}</h3>
                <p>${servicio.descripcion.esp}</p>
                <a href="servicios.html" class="btn-small">Ver más</a>
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