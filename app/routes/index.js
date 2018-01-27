const routes = require('./book_routes');

//export the routes to server
module.exports = function(app, db){
	routes(app, db);
}