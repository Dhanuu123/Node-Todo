var express = require('express');

var todocontrol = require('./controllers/todocontrol');
const app= express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

todocontrol(app);
 
app.listen(3000);
console.log('you are listening to port 3000');

