let realmDb = require('./realmdb/index')
let currentDB = realmDb.getInstance()

currentDB.core.write({
    Car: {
        make: 'Honda',
        model: 'Civic',
        miles: 1000
    }
})