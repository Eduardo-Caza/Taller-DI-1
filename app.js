document.addEventListener('DOMContentLoaded', function() {
    // Capturamos el contenedor del párrafo
    var contenedor = document.getElementById('contenedor');

    // Capturamos el formulario
    var formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Capturamos los valores de los campos del formulario
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var usuario = document.getElementById('usuario').value;
        var email = document.getElementById('email').value;

        // Creamos un nuevo elemento card de Bootstrap
        var tarjeta = document.createElement('div');
        tarjeta.className = 'col-12 col-md-4 mb-3';

        var contenidoTarjeta = `
            <div class="card">
                <img src="usuario.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${nombre} ${apellido}</h5>
                    <p class="card-text">Usuario: ${usuario}</p>
                    <p class="card-text">Correo: ${email}</p>
                    <p class="card-text">Descripción: Un estudiante destacado por su personalidad al igual que por su buen carisma.</p>
                </div>
            </div>
        `;

        // Agregamos el contenido de la tarjeta al elemento tarjeta
        tarjeta.innerHTML = contenidoTarjeta;

        // Capturamos el contenedor de las tarjetas y agregamos la tarjeta creada
        var contenedorTarjeta = document.getElementById('contenedor_tarjeta');
        contenedorTarjeta.appendChild(tarjeta);

        // Limpiamos los campos del formulario
        formulario.reset();
    });
});
