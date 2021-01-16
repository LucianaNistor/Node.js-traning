'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const addressSchema = new Schema({
    city: {
        type: String,
        require: true,
        unique: false 
    },
    street: {
        type: String,
        require: true,
        unique: true
    },
    number: {
        type: String,
        require: true,
        unique: false
    }
}, { timestamps: { currentTime: () => new Date().getTime() } })

module.exports = mongoose.model('addressSchema', addressSchema, 'address')