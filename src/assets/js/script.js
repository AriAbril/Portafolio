
const $form = document.querySelector('#form'); // la constante trae la información de form
const $buttonMailto = document.querySelector('#correo');

$form.addEventListener('submit', handleSubmit); // Cuando el botón de enviar se presione va a realizar la función para mandar los datos

function handleSubmit(event) {
    event.preventDefault(); // evita que la página recarge 
    const form = new FormData(this); // hace referencia al form del html
    console.log(form.get('nombre')); // adquiere la información del "name"
    console.log(form.get('telefono'));
    console.log(form.get('asunto'));
    console.log(form.get('email'));
    console.log(form.get('mensaje'));
    
    $buttonMailto.setAttribute('href', `mailto:occamppo.3025@gmail.com?subjet=${form.get('asunto')}')}&body=${form.get('msn')}${form.get('telefono')}`);
    $buttonMailto.click();
}