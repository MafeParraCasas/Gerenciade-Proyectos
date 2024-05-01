document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const documento = document.getElementById('documento').value;
        const medicamento = document.getElementById('medicamento').value;
        const cantidad = document.getElementById('cantidad').value;
        const observaciones = document.getElementById('observaciones').value;

        // Crear un objeto con la información de la solicitud
        const solicitud = {
            nombre: nombre,
            documento: documento,
            medicamento: medicamento,
            cantidad: cantidad,
            observaciones: observaciones
        };

        // Generar una clave única para la solicitud (puedes usar el nombre del paciente o el documento)
        const solicitudKey = `${nombre}_${documento}`;

        // Guardar la solicitud en localStorage
        localStorage.setItem(solicitudKey, JSON.stringify(solicitud));

        // Limpiar el formulario después de guardar la solicitud
        form.reset();
    });
});
