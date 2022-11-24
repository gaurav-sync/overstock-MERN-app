const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const product = require("../models/product.models.js");


const getdata = async(req, res)=>{

let { page=1, sortby, order, category, brand, limit=9 } = req.query;

let data = [];

let skipValue = (page-1) * +limit;

let sortorder = -1;

if(order==="asc")
sortorder = 1;

if(sortby && order && category && brand){
    data = await product.find({category, brand}).skip(skipValue).limit(+limit).sort({[sortby]:sortorder})
}else if(sortby && order && category){
    data = await product.find({category}).skip(skipValue).limit(+limit).sort({[sortby]:sortorder})
}else if(sortby && order && brand){
    data = await product.find({ brand}).skip(skipValue).limit(+limit).sort({[sortby]:sortorder})
}else if(sortby && order){
    data = await product.find().skip(skipValue).limit(+limit).sort({[sortby]:sortorder})
}else if(category && brand){
    data = await product.find({category, brand}).skip(skipValue).limit(+limit)
}else if(category){
    data = await product.find({category}).skip(skipValue).limit(+limit)
}else if(brand){
    data = await product.find({brand}).skip(skipValue).limit(+limit)
}else{
    data = await product.find().skip(skipValue).limit(+limit)
}



let total = await product.find().count();

// data = await product.find({brand: "Everbilt"});

    res.status(200).send({
        status: 'success',
        data: {
            data,
            page:parseInt(page),
            limit:parseInt(limit),
            total
        }
    })
}


module.exports = getdata;