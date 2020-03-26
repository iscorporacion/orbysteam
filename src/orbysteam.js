const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT_ORBYSTEAM || 3000)

app.listen( app.get('port') , () => {
    console.log("Servidor corriendo en el puerto "+app.get('port'))
})