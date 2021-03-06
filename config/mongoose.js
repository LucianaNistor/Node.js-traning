'use strict'

const mongoose = require('mongoose')

const initMongoose = () => {
    mongoose
        .connect('mongodb://127.0.0.1:27017/node', {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex:true
        })
        .then(() => console.log('db connected'))
        .catch(err => console.log(err))

    process.on("SIGINT", cleanUp)
    process.on("SIGTERM", cleanUp)
    process.on("SIGHUP", cleanUp)
}

const cleanUp = () => mongoose.connection.close(() => process.exit())

module.exports = {
    initMongoose
}