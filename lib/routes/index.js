
var todo = require('../controllers/todo');

exports.init = function(app){
   //list all
   app.get('/api/todos', todo.list);
   //get one
   app.get('/api/todos/:id', todo.get);
   //create
   app.post('/api/todos', todo.create);
   //update
   app.put('/api/todos/:id', todo.update);
   //delete
   app.delete('/api/todos/:id', todo.del);
}
