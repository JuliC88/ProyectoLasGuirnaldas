document.getElementById("formContacto").addEventListener("submit", function (event) {
    event.preventDefault(); // Detiene el envío del formulario

    // Captura de valores
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const mensajeError = document.getElementById("mensajeError");

    // Limpia mensajes anteriores
    mensajeError.textContent = "";

    // Validaciones personalizadas
    if (!nombre || nombre.length < 3 || nombre.length > 20) {
        mensajeError.textContent = "El nombre debe tener entre 3 y 20 caracteres.";
        return;
    }

    if (!email) {
        mensajeError.textContent = "El correo es obligatorio.";
        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        mensajeError.textContent = "El formato del correo es inválido.";
        return;
    }

    if (telefono && !/^[0-9]+$/.test(telefono)) {
        event.preventDefault(); // Evita el envío
        mensajeError.textContent = "El teléfono debe contener solo números.";
        return;
    }

    if (!mensaje || mensaje.length < 10) {
        mensajeError.textContent = "El mensaje debe tener al menos 10 caracteres.";
        return;
    }

    // Si todo es válido
    alert("Formulario enviado con éxito");
    this.submit(); 
});

document.getElementById("formContacto").addEventListener("reset", function () {
    const mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = ""; // Limpia el mensaje de error al resetear
});