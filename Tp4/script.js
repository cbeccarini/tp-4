
function enviar(){
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let pais = document.getElementById("pais").value
    let posicion = document.getElementById("posicion").value

    if (posicion==1){
        document.getElementById("mostrarNombre").innerHTML = nombre
        document.getElementById("mostrarApellido").innerHTML = apellido
        document.getElementById("mostrarEdad").innerHTML = edad
        document.getElementById("mostrarPais").innerHTML = pais
        document.getElementById("mostrarPosicion").innerHTML = posicion
    }

    if (posicion==2){
        document.getElementById("mostrarNombre2").innerHTML = nombre
        document.getElementById("mostrarApellido2").innerHTML = apellido
        document.getElementById("mostrarEdad2").innerHTML = edad
        document.getElementById("mostrarPais2").innerHTML = pais
        document.getElementById("mostrarPosicion2").innerHTML = posicion
    }

    if (posicion==3){
        document.getElementById("mostrarNombre3").innerHTML = nombre
        document.getElementById("mostrarApellido3").innerHTML = apellido
        document.getElementById("mostrarEdad3").innerHTML = edad
        document.getElementById("mostrarPais3").innerHTML = pais
        document.getElementById("mostrarPosicion3").innerHTML = posicion
    }
}

