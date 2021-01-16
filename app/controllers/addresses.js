'use strict'

const Address = require('../models/addresses')

const createNewAddress = (req, res, next) => {
    const address = new Address(req.body)

    address.save((err, result) => {
        err ? res.status(404).json({message: 'MondoDB' + err.message}) : false
        req.resources.addresses = result

        return next()
    })
}
const getAddresses = (req, res, next) => {
    Address
        .find()
        .populate('userId')
        .exec((err, result) => {
            err ? res.status(404).json({message: 'MondoDB' + err.message}) : false
            req.resources.addresses = result
    
            return next()
        })
}

const getAddressByID = (req, res, next) => {
    const { addressID } = req.params

    Address.findById({_id: addressID}, (err, result) => {
        err ? res.status(404).json({message: 'MondoDB' + err.message}) : false
        req.resources.addresses = result

        return next()
    })
}

const deleteAddressByID = (req, res, next) => {
    const { addressID } = req.params

    Address.deleteOne({_id: addressID}, (err, result) => {
        err ? res.status(404).json({message: 'MondoDB' + err.message}) : false

        return next()
    })
}

module.exports = {
    createNewAddress,
    getAddresses,
    getAddressByID,
    deleteAddressByID
}