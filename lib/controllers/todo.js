
var mysql = require('../mysql');

module.exports = {
  list: list,
  get: get,
  create: create,
  update: update,
  del: del
};

function list(req, res){
   mysql.Message.findAndCountAll().then(function(result){
   	   res.send(result);
   },
   function(err){
   	   res.status(500).send(err);
   });
   
}

// /api/todo/:id
function get(req, res){
   var id =  req.params.id;

   mysql.Message.find({where: {id: id}}).then(function(result){
   	   if(result) res.send(result);
   	   else res.status(404).send({code:'NotFound',message:'not found todo'});
   },function(err){
   	   res.status(500).send(err);
   });
}
function create(req,res){
   var obj = {
   	  message: req.body.message
   };
   mysql.Message.create(obj).then(function(result){
   	   res.status(201).send(result);
   },function(err){
   	   res.status(500).send(err);
   });
}
function update(req, res){
	var id =  req.params.id;
   var obj = { 
   	  message: req.body.message
   };
   mysql.Message.update(obj, {where:{id:id}}).then(function(result){
   	   res.send({code:'Success',message:'OK'});
   },function(err){
   	   res.status(500).send(err);
   });
}
function del(req, res){
   var id = req.params.id;

   mysql.Message.destroy({where: {id: id}}).then(function(result){
   	   res.status(204).send({code:'Success',message:'OK'});
   },function(err){
   	   res.status(500).send(err);
   });
}
