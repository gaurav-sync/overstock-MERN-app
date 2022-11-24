const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://<username>:<password>@cluster0.lyejynl.mongodb.net/?retryWrites=true&w=majority"
  );
};

// module.exports = connect;

// const connect = async()=>{
//     return new Promise((resolve, reject) => {

//         mongoose.connect('mongodb+srv://gauravsapkal:pass123@cluster0.lyejynl.mongodb.net/?retryWrites=true&w=majority', (err) => {
//             if (err) {
//                 console.log('Error conencting to DB')
//                 reject(err)
//             } else {
//                 console.log('Successfully connected to DB')
//                 resolve()
//             }
//         })
//     })
// }

module.exports = connect;
