const { mongodbURL, createSuccessful } = require('../common/common.js');

db = connect(mongodbURL);

db.createCollection("People", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "People object validation",
            required: ["firstName", "lastName", "born", "address", "phone"],
            properties: {
                firstName: {
                    bsonType: "string",
                    description: "'firstName' must be a string and is required"
                },
                lastName: {
                    bsonType: "string",
                    description: "'lastName' must be a string and is required"
                },
                born: {
                    bsonType: "date",
                    description: "'born' must be a date and is required"
                },
                died: {
                    bsonType: "date",
                    description: "'died' must be a date"
                },
                phone: {
                    bsonType: "string",
                    description: "'phone' must be a string and is required"
                },
                address: {
                    bsonType: "string",
                    description: "'address' must be a string and is required"
                }
            }
        }
    }
});

createSuccessful('People');