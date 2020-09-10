import RealmDB from '../index';
class Write {
    constructor() {
        this.realmDB = RealmDB.getInstance();
    }

    write(data) {
        if (!Array.isArray(data)) {
            data = [].concat(data)
        }
        this.realmDB.write(() => {
            for (let key in data) {
                this.realmDB.create([key], data.key);
                // (data[index].objKey, data[index].schemaValues)
            }
        })
        console.log('successfully written data')
        this.realmDB.close();
    }
}
export default Write;