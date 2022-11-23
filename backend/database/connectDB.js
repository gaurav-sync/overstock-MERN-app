const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb+srv://gauravsapkal:pass123@cluster0.lyejynl.mongodb.net/?retryWrites=true&w=majority')
}

module.exports = connect;