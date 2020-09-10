const realm = require('realm');
const realmDBConfig = require('./constants')
const Core = require('./core');
class RealmDB {
    constructor() {
        if (RealmDB.instance) {
            throw new Error("You can't create object. Use RealmDB.getInstance()");
        }
    }

    static getInstance() {
        if (!RealmDB.instance) {
            RealmDB.instance = new realm(realmDBConfig);
            RealmDB.instance.core = new Core()
            console.log('Instance created')
        }
        return RealmDB.instance;
    }
}
export default RealmDB;