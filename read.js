const Realm = require('realm');
const realmTest = {
    name: 'OS',
    properties: {
        type: 'string',
        version: 'string',
        test: 'string?'
    }
};

// Get the default Realm with support for our objects
Realm.open({ schema: [realmTest] })
    .then(realm => {
        // ...use the realm instance here
        const osType = realm.objects('OS');
        console.log('OS type : ', JSON.stringify(osType, Realm.JsonSerializationReplacer))
        for (let p of osType) {
            console.log(p.version)
        }
        realm.close();
    })
    .catch(error => {
        // Handle the error here if something went wrong
        console.log('err', err)
    });
