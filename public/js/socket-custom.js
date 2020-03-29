var socket = io();

/* los on son para escuchar  */

socket.on("connect", function() {
    console.log("Conectado al Servidor");
});

socket.on("disconnect", function() {
    console.log("Conexion con el servidor perdida");
});

/* los emit son para enviar informacion al Back */
socket.emit(
    "enviarMensaje", {
        usuario: "Nehemias",
        mensaje: "Hola Mundo"
    },
    function(resp) {
        console.log("respuesta server: ", resp);
    }
);

/* escuchar informacion */
socket.on("enviarMensaje", function(mensaje) {
    console.log("Servidor: ", mensaje);
});