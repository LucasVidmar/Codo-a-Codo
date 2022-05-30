let Usuario = document.getElementById("Usuario")

let Clave = document.getElementById("Clave")

let Ingresar = document.getElementById("Ingresar")

Ingresar.addEventListener("click", function(e){
    
    
    let mensajeDeError = [];
    if(Usuario.value == null || Usuario.value == ''){
        e.preventDefault()

        mensajeDeError.push('Ingrese su nombre')        
        alert(mensajeDeError)
    }
    if(Clave.value == null || Clave.value == ''){
        e.preventDefault()
        mensajeDeError.push('Ingrese su clave')
        alert(mensajeDeError)
    }
    
});
