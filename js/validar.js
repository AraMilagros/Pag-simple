//Para obtener lo que halla ingresado el usuario
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const msj = document.getElementById('msj');

const formulario = document.getElementById('formulario');
const mensaje = document.getElementById('advertencia');

formulario.addEventListener("submit", e=>{
    e.preventDefault();
    let bandera = true;
    let emailExpresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(nombre.value.length < 2){
        alert('El nombre es demasiado corto');
        nombre.style.border = '2px red solid';
        bandera = false;
    }

    if(!emailExpresion.test(email.value)){
        alert('El email no es válido');
        email.style.border = '2px red solid';
        bandera = false;
    }
    if(msj.value.length < 10){
        alert('Su mensaje es demasiado corto');
        msj.style.border = '2px red solid';
        bandera = false;
    }

    if(bandera){
        console.log('todo es true');
        nombre.style.border = 'none';
        email.style.border = 'none';
        msj.style.border = 'none';
        mensaje.innerHTML = "Formulario llenado de forma correcta";
    }
})