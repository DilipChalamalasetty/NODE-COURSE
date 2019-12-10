const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./database_config.js');
const mongoose = require('mongoose');
const user = require('./user.js');
const User = require('./user_model.js');

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Problem in connecting to database', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Do CRUD operations here!"});
});



// INsert a new user
app.post('/insert', user.create);

// Retrieve all User
app.get('/searchall', user.findAll);

// Retrieve a single user
app.get('/search/:email', user.findOne);

// Update the existing user
app.put('/update/:email', user.update);

// Delete a user
// app.delete('/notes/:noteId', user.delete);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});