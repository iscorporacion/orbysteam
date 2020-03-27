const express = require('express');
const path = require('path');
const morgan = require("morgan");
const favicon = require('serve-favicon');

const teamRouter = require('./routes/team');

const app = express();

app.set('port', process.env.PORT_ORBYSTEAM || 3000)
app.set('views', path.join(__dirname,"views"));
app.set('view engine','ejs');

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'..','node_modules')));
app.use(favicon(path.join(__dirname,'public','img','favicon','favicon.ico')));
app.use('/',teamRouter);


app.listen( app.get('port') , () => {
    console.log("Servidor corriendo en el puerto "+app.get('port'))
})