var ObjectID = require('mongodb').ObjectID
const jwt = require('jsonwebtoken');

module.exports = function(app,db){
	//Login
	app.post('/login', (req, res) => {
		//Mock user details received from post
		const user = {
			id: 1,
			username: 'daniel',
			email: 'danmbeyah@gmail.com' 
		}

		jwt.sign({user}, 'secretkey', (err, token) => {
			res.json({
				token
			})
		})
	})

	//create book
	app.post('/books', verifyToken, (req, res) =>{
		//create book
		//console.log(req.body);
		//res.send('Hey John Snow, welcome to Kings landing');
		const book = { summary: req.body.summary, title: req.body.title , author: req.body.author};
		db.collection('books').insert(book, (err, result) => {
			if(err){
				res.send({'error': 'An error has ocurred'})
			}else{
				res.send(result.ops[0])
			}
		})
	})

	//retrieve book by id
	app.get('/books/:id', verifyToken, (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)}; //mongo requires id as an object, not just a simple string
		db.collection('books').findOne(details, (err, item) =>{
			if(err){
				res.send({'error': 'An error has ocurred'})
			}else{
				res.send(item)
			}
		})
	})

	//delete book by id
	app.delete('/books/:id', verifyToken, (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};
		db.collection('books').remove(details, (err, item) =>{
			if(err){
				res.send({'error': 'An error has ocurred'})
			}else{
				res.send('Book ' + id + ' deleted successfully ')
			}
		})
	})

	//update book by id
	app.put('/books/:id', verifyToken, (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};
		const book = { text: req.body.book_body, title: req.body.title };
		db.collection('books').update(details, book, (err, item) =>{
			if(err){
				res.send({'error': 'An error has ocurred'})
			}else{
				res.send('Book ' + id + ' updated successfully ')
			}
		})
	})

	//verify token
	//Token format Authorization: Bearer <authToken>
	function verifyToken(req, res, next){
		//Get auth header value
		const bearerHeader = req.headers['authorization'];

		//check if bearerHeader is defined
		if(typeof bearerHeader !=='undefined'){
			//Split Bearer <authToken> at space
			const bearer = bearerHeader.split(' ');
			//Get token from array
			const bearerToken = bearer[1];
			//Add ttoken to request
			req.token = bearerToken;
			//Call nect middleWare
			next();
		}else{
			//forbidden
			res.json({
				error: 'White walkers are kept off by the wall...get an ice dragon or talk to Snow for access'
			})
		}
	}
}