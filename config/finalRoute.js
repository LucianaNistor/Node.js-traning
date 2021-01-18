'use strict'

const finalRoute = app => app.all('*', (req, res, next) => res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.url} on this server`
}))

module.exports = {
    finalRoute
}