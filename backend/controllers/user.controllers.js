const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require("../models/user.models.js");

const JWT_SECRET = "";

function generateToken(user) {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password
    }, JWT_SECRET);
}


async function login(req, res) {

    const user = req.body;

    let {email, password} = user;

    let existingUser = await userModel.findOne({
        email
    })

    if (existingUser) {
        let match = bcrypt.compareSync(password, existingUser.password);

        if (match) {
            
            let token = generateToken(existingUser);

            return res.status(200).send({
                status: 'success',
                data: {
                    token
                }
            })
        } else {
            return res.status(400).send({
                status: 'error',
                message: 'Password is wrong'
            })
        }
    } else {

        return res.status(400).send({
            status: 'error',
            message: 'User does not exist with the given email'
        })
    }
}


async function register(req, res) {
    const user = req.body;

    let {name, email, password} = user;

    let existingUser = await userModel.findOne({
        email
    })

    if (existingUser) {
        return res.status(400).send({
            status: 'error',
            message: 'User already exists with the given email'
        })
    } else {
        password = bcrypt.hashSync(password);
        let user = await User.create({
            name, email, password
        })

        user = user.toJSON();

        delete user.password;

        return res.status(200).send({
            status: 'success',
            data: user
        })
    }
}


module.exports = {
    register,
    login
}