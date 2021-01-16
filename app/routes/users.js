'use strict'

const express = require('express')
const router = express.Router()
const { 
    createUser,
    getUsers,
    getUserByID,
    deleteUserByID
} = require('../controllers/users')
const { isAuth } = require('../controllers/auth')
const { responseToItem } = require('../helpers')

router.get('/users', getUsers, responseToItem('users'))
router.get('/users/:userID', getUserByID, responseToItem('users'))
router.delete('/users/:userID', deleteUserByID, responseToItem('users'))
router.post('/users', isAuth, createUser, responseToItem('users'))
router.put('/users', (req, res, next) => res.json({text: 'Hello from user page PUT'}))

module.exports = router;