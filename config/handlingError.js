'use strict'

const handlingError = app => app.use((err, req, res, next) => res.json({
    status: 'error',
    message: err && err.message || 'Default error message'
  }))

module.exports = {
    handlingError
}