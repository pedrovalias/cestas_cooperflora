const express = require('express');
const bodyParser = require('body-parser');

let app = express();
let port = 4000;

// Utilizando o ejs 
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Para funcionar o body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function() {
    console.log("Servidor rodando na porta: ", port);   
});

// Exporta a variável para poder ser chamada em arquivos externos
module.exports = app;