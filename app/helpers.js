'use strict'

const responseToItem = propItem => (req, res, next) => res.json(req.resources[propItem])

module.exports = {
    responseToItem
}