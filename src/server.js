const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const dotenv= require('dotenv')
dotenv.config()
const app = express();


app.set('port', process.env.PORT || 5500);

global.Conexiones_API = [];
require('./database');

//configuraciones
//middlewares



app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {

    res.locals.user = req.user || null;
    next();
});

//rutas


app.use(require('./routes/recolector'));
app.use(require('./routes/users'));
app.use(require('./routes/recolectorDeCompras'));
app.use(require('./routes/recolectorTraslados'));
app.use(require('./routes/preciosModificados'));
app.use(require('./routes/EditarProductos'));
//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
//inicializar server
app.listen(app.get('port'), () => {

    console.log('Servidor iniciado en puerto', app.get('port'));
});

