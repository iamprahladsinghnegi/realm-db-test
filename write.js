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
        realm.write(() => {
            const myCar = realm.create('OS', {
                type: 'Linux',
                version: '18',
            });
        })
        console.log('done')
        realm.close();
    })
    .catch(error => {
        // Handle the error here if something went wrong
    });