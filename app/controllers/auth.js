'use strict'

const auth = true

const isAuth = (req, res, next) => {
    auth ? next() : false

    res.json({message: 'You must auth first'})
}

module.exports ={
    isAuth
}