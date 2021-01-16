'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true,
        unique: false
    }
}, { timestamps: { currentTime: () => new Date().getTime() } })

module.exports = mongoose.model('user', userSchema, 'users')