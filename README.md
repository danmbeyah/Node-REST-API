# Node-REST-API
This is a node RESTful API that uses Express engine and Mongo DB for CRUD operations. You can add, update, retrieve or delete a book record from the books database. The API routes are protected and access authenticated using Json Web Token (jwt)

# Set Up
1. Clone the repo

   Run git clone "https://github.com/danmbeyah/Node-REST-API.git" .
   
2. Update/Install node modules

   Run npm update
   
3. Install dependencies

   Run npm install -save express mongodb body-parser jsonwebtoken
   
4. Install nodemon, a dev dependency to automatically restart server after file changes

   npm install --save-dev nodemon
   
5. Create an account on mLab where your Mongo DB will be hosted (https://mlab.com)
   For this repo, db is books and collection is books. Change user and password to reflect your settings in config.

# To Run Server

npm run dev

# Testing
Use Postman to run/access the APIs
Login using http://localhost:8000/login to get access token. Set token in header for subsequent API calls below.
Header {Authorization: Bearer <token>}

POST     http://localhost:8000/books
         Params(title,author,summary)

GET      http://localhost:8000/books/:id
         Params (id is record ID from mLab)
         
DELETE   http://localhost:8000/books/:id
         Params (id is record ID from mLab)
         
UPDATE.  http://localhost:8000/books/:id
         Params(title,author,summary)
         
# To Do
1. Develop React Native app to consume API
