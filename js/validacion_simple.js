function resetErrorMessages() {
    console.log("voy a limpiar los divs");
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element)=> {
        element.innerText = "";
    });
    console.log("ya limpie los divs");
}
function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}
function isValidEmail(email) {
    // Utilizamos una expresión regular para validar el formato del correo electrónico
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // estructura texto@texto.texto

    return emailPattern.test(email);
}


document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("loginForm");
    console.log(form);
    form.addEventListener("submit", (event)=>{
        // Evitar que se envíe el formulario automáticamente
        event.preventDefault();

        // Resetear los mensajes de error
        resetErrorMessages();

        // Validar los campos
        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let isValid = true;

        if (username === "") {
            displayErrorMessage("usernameError", "Por favor ingrese un usuario.");
            isValid = false;
        }

        if (!isValidEmail(email)) {
            displayErrorMessage("emailError", "Por favor ingrese un correo electrónico válido.");
            isValid = false;
        }

        if (password.length < 8) {
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (isValid) {
            // Aquí puedes enviar el formulario si todos los campos son válidos
            alert("¡Formulario enviado correctamente!");
            // Por ejemplo:
            // document.getElementById("loginForm").submit();
        }
    });
} );

/* la funcion de arriba se podia escribir como una funcion normal o una funcion anonima 
function validarFormulario() {
}*/





/*
// funciones
function validar(mensaje){
    // validaciones---
    console.log("validando",mensaje);
}

// llamar a la funcion de la
validar("hola mundo");

//funcion callback usando validar

function queusaValidar(validar){
    validar("chau mundo");
}

queusaValidar(validar);

document.addEventListener("DOMContentLoaded", (mensaje)=>{
    validar(mensaje);
} );
*/
