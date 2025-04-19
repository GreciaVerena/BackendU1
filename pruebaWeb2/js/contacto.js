// Función para manejar el envío del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-contacto');
    
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const asunto = document.getElementById('asunto').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Validar que los campos requeridos estén completos
            if (!nombre || !email || !asunto || !telefono ||  !mensaje) {
                alert('Por favor, complete todos los campos obligatorios.');
                return;
            }
            
            // Simular el envío del formulario (en un entorno real se enviaría a un endpoint)
            alert('¡Gracias por contactarnos! Su mensaje ha sido enviado correctamente.');
            
            // Limpiar el formulario
            formulario.reset();
        });
    }
}); 