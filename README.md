# Node-REST-API
This is a node RESTful API that uses Express engine and Mongo DB for CRUD operations. You can add, update, retrieve or delete a book record from your database.

Set Up:
1. git clone "https://github.com/danmbeyah/Node-REST-API.git" .
2. Update/Install node modules
   Run npm update
3. Install dependencies
   Run npm install -save express mongodb body-parser
4. Install nodemon, a dev dependency to automatically restart server after file changes
   npm install --save-dev nodemon
5. Create an account on mLab where your Mongo DB will be hosted (https://mlab.com)
   For this repo, db is books and collection is books. Change user and password to reflect your settings in config.

To run:
npm run dev

Testing:
Use Postman to run 
POST     http://localhost:3000/books
         Params(title,author,summary)

GET      http://localhost:3000/books/5a6cc1b60901ab7d321b977c

DELETE   http://localhost:3000/books/5a6cc1b60901ab7d321b977c

UPDATE.  http://localhost:3000/books/5a6cb8df82e4cc78d24906b5
         Params(title,author,summary)
