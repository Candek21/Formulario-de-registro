var campoNombre = document.querySelector('input[name=nombre]');
var errorNombre = document.getElementById("errorNombre");
var campoApellido = document.querySelector('input[name=apellido]');
var errorApellido = document.getElementById("errorApellido");
var campoEdad = document.querySelector('input[name=edad]');
var campoEmail = document.querySelector('input[name=email]');
var campoContraseña = document.querySelector('input[name=contraseña]');
var campoConfirmarContraseña = document.querySelector('input[name=confirmarContraseña]');
var formulario = document.getElementById("formRegister");

campoNombre.addEventListener("blur", function (){
    if (this.value.trim() == ''){
        errorNombre.textContent = "Introduce un nombre de usuario";
    }else if (this.value.length < 3){
        errorNombre.textContent = "El nombre no puede contener menos de 3 letras.";
        }
        else {
            errorNombre.textContent = "";
        }
});

campoApellido.addEventListener("blur", function (){
    if (this.value.trim() == ''){
            errorApellido.textContent = "El apellido es obligatorio.";
    }else if (this.value.length < 3){
        errorApellido.textContent = "El apellido no puede contener menos de 3 caracteres.";
        }else {
            errorApellido.textContent = "";
        }
});

campoEdad.addEventListener("blur", function (){
    if (this.value.trim() == ''){
        errorEdad.textContent = "La edad es obligatoria.";
    }else if ((this.value < 0) || (this.value > 150)){
        errorEdad.textContent = "La edad debe estar entre 0 y 150 años.";
    } else{
            errorEdad.textContent = "";
        }
});

var regexMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

campoEmail.addEventListener("blur", function (){
    if (this.value.trim() == ''){
        errorEmail.textContent = "El email es obligatorio.";
    }else if (!regexMail.test(this.value)){
        errorEmail.textContent = "El email no tiene un formato valido.";
        }else{
            errorEmail.textContent = "";
        }
});

campoContraseña.addEventListener("blur", function (){
    if (this.value.trim() == ''){
        errorContraseña.textContent = "La contraseña es obligatoria.";
    }else if (this.value.length < 8){
        errorContraseña.textContent = "La contraseña debe tener un mínimo de 8 caracteres.";
        }else{
            errorContraseña.textContent = "";
        }
});

campoConfirmarContraseña.addEventListener("blur", function (){
    if (this.value.trim() == ''){
        errorConfirmarContraseña.textContent = "Debe confirmar su contraseña.";
    }else if (this.value != campoContraseña.value){
        errorConfirmarContraseña.textContent = "Las contraseñas no coinciden.";
        }else{
            errorConfirmarContraseña.textContent = "";
        }
});


// Para evitar enviar el formulario
formulario.onsubmit = function (event){
    var error = true;
    //Verificamos que el campo nombre no este vacio
    if (campoNombre.value.trim() == ''){
        alert("Introduce un nombre de usuario");
        event.preventDefault();
    }
    else{
        //Verificamos que el campo nombre no tenga menos de 3 letras
        if (campoNombre.value.length < 3){
            alert("El nombre no puede contener menos de 3 letras.");
            event.preventDefault();   
        }
        else {
             //Verificamos que el campo apellido no este vacio
             if (campoApellido.value.trim() == ''){
                alert("El apellido es obligatorio.");
                event.preventDefault();  
            }
            else{
                 //Verificamos que el campo apellido no tenga menos de 3 letras
                 if (campoApellido.value.length < 3){
                    alert("El apellido no puede contener menos de 3 caracteres.");
                    event.preventDefault();
                }
                else{
                    //Verificamos que el campo edad no este vacio
                    if (campoEdad.value.trim() == ''){
                        alert("La edad es obligatoria.");
                        event.preventDefault();
                    }
                    else{
                        //Verificamos que el campo edad este entre 0 y 150 años.
                        if ((campoEdad.value < 0) || (campoEdad.value > 150)){
                            alert("La edad debe estar entre 0 y 150 años.");
                            event.preventDefault();
                        }
                        else{
                            //Verificamos que el campo de email no este vacio
                            if (campoEmail.value.trim() == ''){
                                alert("El email es obligatorio.");
                                event.preventDefault();
                            }
                            else{
                                //Verificamos que el campo de email tenga una dirección valida
                                if (!regexMail.test(campoEmail.value)){
                                    alert("El email no tiene un formato valido.");
                                    event.preventDefault();
                                    }
                                    else{
                                        //Verificamos que el campo de contraseña no este vacio
                                        if (campoContraseña.value.trim() == ''){
                                            alert("La contraseña es obligatoria.");
                                            event.preventDefault();
                                        }
                                        else{
                                            //Verificamos que la contraseña tenga un minimo de 8 caracteres
                                            if (campoContraseña.value.length < 8){
                                                alert("La contraseña debe tener un mínimo de 8 caracteres.");
                                                event.preventDefault();
                                            }
                                            else{
                                                //Verificamos que el usuario haya confirmado su contraseña
                                                if (campoConfirmarContraseña.value.trim() == ''){
                                                    alert("Debe confirmar su contraseña.");
                                                    event.preventDefault();
                                                }
                                                else{
                                                    //Verificamos que las contraseñas coincidan
                                                    if (campoConfirmarContraseña.value != campoContraseña.value){
                                                        alert("Las contraseñas no coinciden.");
                                                        event.preventDefault();
                                                    }
                                                    else{
                                                        document.getElementById("divForm").style.display="none";
                                                        error = false
                                                    }
                                                }
                                            }

                                        }
                                    }
                            }
                        }
                    }
                }
            }
        }
    }
    document.getElementById("divForm").style.display="none";
    if (error == false){
        document.getElementById("divForm").style.display="none";
        alert("Registro exitoso.");
    }
}
