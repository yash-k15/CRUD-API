// Get the packages
const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users');

// initialize or start Express framework
const app = express()

app.use(users);

// Get mongoDB cloud instance link
const mongoUri = 'mongodb+srv://admin:root@crud-api.2nr1u.mongodb.net/<dbname>?retryWrites=true&w=majority'

// connect mongoDb with the app
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

//What happens when connection to Mongo is successfull
mongoose.connection.on('open', () => {
    console.log('Connected to mongo instance');
}) 

//What happens when connection to Mongo is not successfull
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
})

app.listen(8000, () => {
    console.log('listening on port 8000')
})