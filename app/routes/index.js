const routes = require('./book_routes');

module.exports = function(app, db){
	routes(app, db);
}