'use strict'

const ENV = process.env.NODE_ENV || 'development'
const config = require(`./environments/${ENV}`)

module.exports = config;