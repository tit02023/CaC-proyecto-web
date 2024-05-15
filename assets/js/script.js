// PARA HEADER STICKY
window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);

    let logopequeño = document.querySelector('.mini-logo');
    logopequeño.style.display = window.scrollY > 0 ? 'block' : 'none';
});
//PARA MENU DESPLEGABLE
function toggleMenu(){
    let menuToggle = document.querySelector('.menuToggle');
    let navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
}


//FORMULARIO EN 3 PASOS

let currentStep = 1;
let dni;
let correo;
let codigo;


function cancelar(step){
    hideStep(step);
    document.getElementById("show-process").style.display = "block"; 
    currentStep = 1;
    // blanqueo los inputs
    document.getElementById("dni").value="";
    document.getElementById("correo").value="";
    document.getElementById("codigo-seguimiento").value="";
    document.getElementById("process-container").style.display = "none";
}

function showProcess(){
    let proceso = document.getElementById("process-container");
    proceso.style.display = "Block";
    document.getElementById("show-process").style.display = "none";
    showStep(currentStep);
}

function showStep (step){
    let paso = document.getElementById("step"+step);
    paso.style.display = "Block";
}

function hideStep (step){
    document.getElementById("step"+step).style.display = "none";
}

function nextStep(step) {
    if (validateInputs(step)) {
        hideStep(currentStep);
        currentStep = step + 1;
        showStep(currentStep);
    }
}

function prevStep(step){
    hideStep(currentStep);
    currentStep = step - 1;
    showStep(currentStep);
}

function send(event) {
    event.preventDefault();
    if (validateInputs(currentStep)) {
        dni = document.getElementById("dni").value;
        correo = document.getElementById("correo").value;
        codigo = document.getElementById("codigo-seguimiento").value;
        alert("Formulario enviado");
        let datos = document.getElementById("user-data");
        datos.innerHTML = `
        <p><strong>Los datos ingresados son los siguientes:</strong></p>
        <p>DNI: ${dni}</p>
        <p>Correo: ${correo}</p>
        <p>Código de Seguimiento: ${codigo}</p>
        `;
        hideStep(currentStep);
    }
}

function validateInputs(step) {
    let inputsValid = true;
    let inputs = document.getElementById("step" + step).querySelectorAll("input[required]");
    
    inputs.forEach(input => {
        if (input.id === "dni") {
            // validacion... que DNI solo contenga numeros y tenga al menos 7 digitos
            if (!/^\d{7,}$/.test(input.value.trim())) {
                alert("Por favor, ingrese un DNI válido con al menos 7 dígitos numéricos.");
                inputsValid = false;
            }
        } else if (input.id === "correo") {
            // validacion email
            if (!/\S+@\S+\.\S+/.test(input.value.trim())) {
                alert("Por favor, ingrese una dirección de correo electrónico válida.");
                inputsValid = false;
            }
        } else if (input.id === "codigo-seguimiento") {
            // Validar que el código de seguimiento solo contenga números
            if (!/^\d+$/.test(input.value.trim())) {
                alert("Por favor, ingrese un código de seguimiento válido (solo números)");
                inputsValid = false;
            }
        }

        // Validar campo obligatorio
        if (input.value.trim() === "") {
            alert("Por favor, complete todos los campos obligatorios.");
            inputsValid = false;
        }
    });

    return inputsValid;
}


showStep(currentStep);

//formulario de contacto
function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '<strong>Nombre:</strong> ' + name + '<br>' +
                            '<strong>Correo Electrónico:</strong> ' + email + '<br>' +
                            '<strong>Mensaje:</strong> ' + message;

    document.getElementById('modal').style.display = 'flex';

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}





