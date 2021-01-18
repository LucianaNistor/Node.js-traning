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
        unique: false
    },
    number: {
        type: String,
        require: true,
        unique: false
    },
    userId: {
        type: ObjectId,
        ref: 'user',
        required: true
    },
    billing: [
        {
            postalCode: {
                type: Number
            },
            company: {
                type: String
            }
        }
    ]
}, { timestamps: { currentTime: () => new Date().getTime() } })

module.exports = mongoose.model('addressSchema', addressSchema, 'address')