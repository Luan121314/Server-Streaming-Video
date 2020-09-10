const express = require('express');
const route = require('./controller')

const app = express();
app.use(route);
app.set('view engine', 'ejs');

app.listen(5000, ()=>{
    console.log('Servidor streaming olnline !');
});