'use strict'

const path = require('path')

const initRoutes = app => {
    const routesPath = path.join(__dirname, '../app/routes')
    const routes = ['users', 'addresses']

    routes.forEach((route) => app.use(require(`${routesPath}/${route}`)))
}

module.exports = {
    initRoutes
}