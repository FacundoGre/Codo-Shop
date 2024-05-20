function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var consulta = document.getElementById('consulta').value;
    var interes = document.getElementById('interes').value;
    var imagen = document.getElementById('imagen').value;
    var opciones = document.querySelectorAll('input[name="opciones"]:checked').length;

    if (nombre === '' || email === '' || telefono === '' || consulta === '' || interes === '' || imagen === '' || opciones === 0) {
        alert('Todos los campos son obligatorios.');
        return false;
    }

    return true;
}
