// function agregar_nuevacita(){
//     let nombre = document.getElementById('nombre').value;
//     // let fecha = document.getElementById('fecha').value;
//     // let hora = document.getElementById('hora').value;
//     // let lugar = document.getElementById('lugar').value;
//     // let telefono = document.getElementById('telefono').value;
//     // let comentarios = document.getElementById('comentarios').value;

//     let nuevoRegistro = {
//         nombre: nombre,
//         fecha: fecha,
//         hora: hora,
//         lugar: lugar,
//         telefono: telefono,
//         comentarios: comentarios,
//     }

//     if(localStorage.getItem(nombre) == null){
//         localStorage.setItem(nombre, JSON.stringify(nuevoRegistro))
//     }
// }

// const btguardar =  document.getElementById('agregar_registro')
// btguardar.addEventListener('click', agregar_nuevacita());

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente

        // Obtener los valores del formulario
        const especialidad = document.getElementById('especialidad').value;
        const nombre = document.getElementById('nombre').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const lugar = document.getElementById('lugar').value;
        const telefono = document.getElementById('telefono').value;
        const comentarios = document.getElementById('comentarios').value;

        // Crear un objeto con la información de la cita
        const cita = {
            especialidad: especialidad,
            nombre: nombre,
            fecha: fecha,
            hora: hora,
            lugar: lugar,
            telefono: telefono,
            comentarios: comentarios
        };

        // Generar una clave única para la cita (puedes usar la fecha y hora)
        const citaKey = `${fecha}_${hora}`;

        // Guardar la cita en localStorage
        localStorage.setItem(citaKey, JSON.stringify(cita));

        // Limpiar el formulario después de guardar la cita
        form.reset();
    });
});