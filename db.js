const {MongoClient} = require('mongodb')

let dbConnection

let uri = 


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

