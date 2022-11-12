db = connect('mongodb://localhost');

db = db.getSiblingDB('library-management');

db.createCollection("Publisher", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Publisher object validation",
            required: ["id, address, phone"],
            properties: {
                id: {
                    bsonType: "int",
                    description: "'id' must be a int and is required"
                },
                address: {
                    bsonType: "string",
                    description: "'address' must be a string and is required"
                },
                phone: {
                    bsonType: "string",
                    description: "'phone' must be a string and is required"
                }
            }
        }
    }
});

print('Publisher collection is created successfully.');