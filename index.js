const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//crear el servidor...
const app = express();

// conactar a la base de datos
conectarDB();
app.use(cors());

app.use(express.json()); //habilitar para que puedan enviar json a la aplicación

app.use('/api/productos', require('./routes/producto'));


//definir la ruta principal
/*
app.get('/', (req, res) => { //req request, res response
    res.send('Hola Mundo');
})
*/

app.listen(4000, () => {
    console.log('el servidor esta corriendo perfectamente')
})