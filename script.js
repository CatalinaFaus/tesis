// Validación de formulario
document.getElementById('form-reportar').addEventListener('submit', function(e) {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    if (!nombre || !descripcion) {
        e.preventDefault();
        alert("Por favor, completa todos los campos.");
    }
});

// Menú desplegable
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});
