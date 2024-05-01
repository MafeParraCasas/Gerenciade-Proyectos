document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente


        // Obtener los valores del formulario
        const iduser = document.getElementById('iduser').value;
        const tipo_tramite = document.getElementById('tipo_tramite').value;
        const fecha = document.getElementById('fecha').value;
        const comentarios = document.getElementById('comentarios').value;
        const randomNumberInput = document.getElementById('randomNumberInput').value;

        // Crear un objeto con la información de la solicitud
        const solicitud = {
            iduser: iduser,
            tipo_tramite: tipo_tramite,
            fecha: fecha,
            comentarios: comentarios,
            randomNumberInput: randomNumberInput
        };

        // Generar una clave única para la solicitud (puedes usar el número de cédula o el tipo de trámite)
        const solicitudKey = `${iduser}_${tipo_tramite}`;

        // Guardar la solicitud en localStorage
        localStorage.setItem(solicitudKey, JSON.stringify(solicitud));

        // Limpiar el formulario después de guardar la solicitud
        form.reset();
    });
});
