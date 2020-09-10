
export default realmDBConfig = {
    schema: [defaultSchemas.carSchema, defaultSchemas.personSchema],
    path: './db_files/test.realm'
}

const defaultSchemas = {
    carSchema: {
        name: 'Car',
        properties: {
            make: 'string',
            model: 'string',
            miles: { type: 'int', default: 0 },
        }
    },
    personSchema: {
        name: 'Person',
        properties: {
            name: 'string',
            age: 'int',
        }
    }
}