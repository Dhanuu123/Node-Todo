
var bodyParser = require('body-parser');

var data = [{item:'Milk'},{item:'choco'}];

module.exports = function(app){
var urlencodedParser =bodyParser.urlencoded({extended: false});

app.get('/todo',function(req,res){
      res.render('todo',{todos:data});
});

app.post('/todo',urlencodedParser,function(req,res){
         data.push(req.body);
         res.json(data);
});

app.delete('/todo',function(req,res){

});

}; 