'use strict'

const User = require('../models/users')

const createUser = (req, res, next) => {
    const user = new User(req.body)

    if (req.body.address) {
        user.address = req.body.address
    }

    user.save((err, result) => {
        if(err) {
            return next(err)
        }
        req.resources.users = result

        return next()
    })
}
const getUsers = (req, res, next) => {

    User.find((err, result) => {
        err ? res.status(404).json({message: 'MondoDB' + err.message}) : false
        req.resources.users = result

        return next()
    })
}

const getUserByID = (req, res, next) => {
    const { userID } = req.params

    User.findById({_id: userID}, (err, result) => {
        err ? res.status(404).json({message: 'MondoDB' + err.message}) : false
        req.resources.users = result

        return next()
    })
}

// Model for update 

// const updateUserById = (req, res, next) => {
//     const { userID } = req.params

//     User.findOneAndDelete({_id: userID}, req.body, (err, result) => {
//         err ? res.status(404).json({message: 'MondoDB' + err.message}) : false
//         req.resources.users = result

//         return next()
//     })
// }

const deleteUserByID = (req, res, next) => {
    const { userID } = req.params

    User.deleteOne({_id: userID}, (err, result) => {
        err ? res.status(404).json({message: 'MondoDB' + err.message}) : false

        return next()
    })
}

module.exports = {
    createUser,
    getUsers,
    getUserByID,
    deleteUserByID
}