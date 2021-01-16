'use strict'

const User = require('../models/users')

const createUser = (req, res, next) => {
    const user = new User(req.body)

    user.save((err, result) => {
        err ? res.status(404).json({message: 'MondoDB' + err.message}) : false
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

const updateUserById = (req, res, next) => {
    const { userID } = req.params

    User.findOneAndDelete({_id: userID}, req.body, (err, result) => {
        err ? res.status(404).json({message: 'MondoDB' + err.message}) : false
        req.resources.users = result

        return next()
    })
}

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