const express = require('express');
const cors = require('cors');
const { connect } = require('./database/connectDB.js');
const { register, login } = require('./controllers/user.controllers.js');


const app = express();


app.use(cors());
app.use(express.json());

app.post('/register', register);
app.post('/login', login);


connect()
.then(() => {
    app.listen(8080, () => {
        console.log('Listening on http://localhost:8080')
    })
})