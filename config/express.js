'use strict'

const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const initExpress = app => {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(methodOverride())
 
    app.use((req, res, next) => {
        req.resources = req.resources || {}
        next()
    })
}

module.exports = {
    initExpress
}