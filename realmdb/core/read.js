import RealmDB from '../index';
class Read {
    constructor() {
        this.realmDB = RealmDB.getInstance();
    }

    Read(rObj, filter, sort) {
        const results = this.realmDB.objects(rObj);
        const jsonResult = JSON.stringify(results, Realm.JsonSerializationReplacer)
        console.log('successfully written data')
        this.realmDB.close();
        return jsonResult
    }
}
export default Write;