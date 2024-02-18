
let container = document.querySelector('.container'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    container.classList.add('animated-signin');
    container.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    container.classList.add('animated-signup');
    container.classList.remove('animated-signin');
});


//SCROLL
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 1500,
    reset: true
})

sr.reveal ('.container',{delay:100});

//LOADER
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 1000);
}

window.onload = fadeOut;

//VALIDACIÓN DEL FORMULARIO

// Función para validar el formato del correo electrónico del usuario
function validarCorreo(email) {
    // Expresión regular para la validación del formato del correo electrónico 
    var regex = /^[a-zA-Z0-9._-]+@gmail\.(com|es)$/; //(@gmail.com o @gmail.es)
    return regex.test(email);
}

// Obtener los campos del formulario


//Ambos
var emailInputs = document.querySelectorAll("#emailup, #nameini");
var passwordInputs = document.querySelectorAll("#passwordup, #passini");

//Validación de los correos electrónicos
//FOREACH-keyup
emailInputs.forEach(function(emailInput) {
    emailInput.addEventListener("keyup", function() {
        var email = emailInput.value;
        var valid = validarCorreo(email);
        if (valid) {
            // Si el correo electrónico es válido
            emailInput.style.borderColor = "green";
        } else {
            // No es válido
            emailInput.style.borderColor = "red";
        }
    });
});

// Función para validar la contraseña
function validarContraseña(contraseña) {
    // Expresión regular para verificar que la contraseña tenga al menos 8 caracteres y al menos un número
    var regex = /^(?=.*[0-9]).{8,}$/;
    return regex.test(contraseña);
}

//FOREACH-keyup
passwordInputs.forEach(function(input) {
    input.addEventListener("keyup", function() {
        var pass = input.value;
        var valid = validarContraseña(pass);
        if (valid) {
            input.style.borderColor = "green";
        } else {
            input.style.borderColor = "red";
        }
    });
});


// Manejador de evento para el botón de registrarse
document.getElementById('btnRegistrarse').addEventListener('click', function(event) {
    var contraseña = document.getElementById('passwordup').value;
    var email = document.getElementById('emailup').value;
    var errorMsg = document.getElementById('error-msg');
    var correctMsg = document.getElementById('success-msg');

    // Función para validar la contraseña
    function validarContraseña(contraseña) {
        return contraseña.length >= 8 && /\d/.test(contraseña);
    }

    // Función para validar el correo electrónico
    function validarCorreo(email) {
        return /\S+@\S+\.(com|es)/.test(email);
    }

    // Función que devuelve una promesa
    function validarFormulario() {
        return new Promise(function(resolve, reject) {
            if (!validarContraseña(contraseña)) {
                // errorMsg.textContent = 'La contraseña debe tener al menos 8 caracteres y contener al menos un número.';
                errorMsg.style.display = 'block';
                reject('Contraseña no válida');
            } else if (!validarCorreo(email)) {
                // errorMsg.textContent = 'El email debe tener al menos @gmail.com/.es';
                errorMsg.style.display = 'block';
                reject('Correo electrónico no válido');
            } else {
                errorMsg.style.display = 'none';
                resolve();
            }
        });
    }

    // Llamada a la función de validación y manejo de la promesa
    validarFormulario()
        .then(function() {
            // Si la validación es correcta, mostrar mensaje de éxito
            setTimeout(function() {
                //SETTIMEOUT
                correctMsg.textContent = 'Formulario enviado correctamente.';
                correctMsg.style.display = 'block';
    
             // Aquí podrías agregar código para redirigir a otra página, reiniciar el formulario, etc.
    }, 2000);
        })
        .catch(function(error) {
            // Manejo de errores de validación
            console.error('Error en la validación del formulario:', error);
            event.preventDefault(); // Evitar que se envíe el formulario si la validación falla
        });
});


// Manejador de evento para el botón de iniciar Sesión
document.getElementById('btnIni').addEventListener('click', function(event) {
    var contraseña = document.getElementById('passini').value;
    var email = document.getElementById('nameini').value;
    var errorMsg = document.getElementById('error-msg2');
    var correctMsg = document.getElementById('error-msg2');
    //SWITCH CASE
    switch(true){

        case !validarContraseña(contraseña):
            errorMsg.textContent = 'La contraseña debe tener al menos 8 caracteres y contener al menos un número.';
            errorMsg.style.display = 'block';
            event.preventDefault(); // Evitar que se envíe el formulario si la contraseña no es válida
            break;
        case !validarCorreo(email):
            errorMsg.textContent = 'El email debe tener al menos @gmail.com/.es';
            errorMsg.style.display = 'block';
            event.preventDefault(); // Evitar que se envíe el formulario si el gmail no es válida
            break;
        default:
            errorMsg.style.display = 'none';
            setTimeout(function() {
                //SETTIMEOUT
                correctMsg.textContent = 'Formulario enviado correctamente.';
                correctMsg.style.display = 'block';
    
             // Aquí podrías agregar código para redirigir a otra página, reiniciar el formulario, etc.
    }, 2000);
            break;
    }  
});









