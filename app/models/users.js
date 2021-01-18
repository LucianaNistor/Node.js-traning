'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        require: [true, 'email is required'],
        unique: true
    },
    name: {
        type: String,
        require: true,
        unique: false
    },
    address: {
        street: {
            type: String
        },
        number: {
            type: String
        },
        city: {
            type: String
        }
    }
}, { timestamps: { currentTime: () => new Date().getTime() } })

module.exports = mongoose.model('user', userSchema, 'users')