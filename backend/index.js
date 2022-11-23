const express = require('express');
const cors = require('cors');
// const { connect } = require('./database/connectdb.js');
const { register, login } = require('./controllers/user.controllers.js');
const { default: mongoose } = require('mongoose');
require('dotenv').config()

const ATLAS_USERNAME = process.env.ATLAS_USERNAME;
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD;

const app = express();


app.use(cors());
app.use(express.json());

app.post('/register', register);
app.post('/login', login);

const connect = () => {
    return mongoose.connect(`mongodb+srv://${ATLAS_USERNAME}:${ATLAS_PASSWORD}@cluster0.obuzm6f.mongodb.net/?retryWrites=true&w=majority`)
}

connect()
.then(() => {
    app.listen(8080, () => {
        console.log('Listening on http://localhost:8080')
    })
})