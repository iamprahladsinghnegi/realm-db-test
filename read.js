const Realm = require('realm');
const realmTest = {
    name: 'OS',
    properties: {
        type: 'string',
        version: 'string',
    }
};

// Get the default Realm with support for our objects
Realm.open({ schema: [realmTest] })
    .then(realm => {
        // ...use the realm instance here
        const osType = realm.objects();
        console.log('OS type : ', osType)
        realm.close();
    })
    .catch(error => {
        // Handle the error here if something went wrong
    });