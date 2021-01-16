'use strict'

const express = require('express')
const router = express.Router()
const { 
    createNewAddress, 
    getAddresses,
    getAddressByID,
    deleteAddressByID
} = require('../controllers/addresses')
const { responseToItem } = require('../helpers')

router.get('/addresses', getAddresses, responseToItem('addresses'))
router.get('/addresses/:addressID', getAddressByID, responseToItem('addresses'))
router.delete('/addresses/:addressID', deleteAddressByID, responseToItem('addresses'))
router.post('/addresses', createNewAddress, responseToItem('addresses'))

module.exports = router;