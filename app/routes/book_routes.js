var ObjectID = require('mongodb').ObjectID

module.exports = function(app,db){
	//create book
	app.post('/books', (req, res) =>{
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
	app.get('/books/:id', (req, res) => {
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
	app.delete('/books/:id', (req, res) => {
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
	app.put('/books/:id', (req, res) => {
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
}