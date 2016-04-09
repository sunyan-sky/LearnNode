


var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'root', '' ,{
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
}); 

exports.Message = sequelize.define('message', {
  id: { type: Sequelize.INTEGER, primaryKey:true}, 
  message: Sequelize.STRING
},{
	tableName: 'message',
	createdAt: false,
    updatedAt: false
});
