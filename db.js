const {MongoClient} = require('mongodb')

let dbConnection

let uri = 'mongodb+srv://ericyuan:oYoWLBvcSUU2YCqx@spartahack9.pfiocqz.mongodb.net/?retryWrites=true&w=majority'


module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect()
            .then((client) => {
                dbConnection = client.db(uri)
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}

