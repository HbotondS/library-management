db = connect('mongodb://localhost');

db = db.getSiblingDB('library-management');

db.createCollection("Borrowed", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Borrowed object validation",
            required: ["borrowerId", "bookId"],
            properties: {
                borrowerId: {
                    bsonType: "objectId",
                    description: "'borrowerId' must be an objectId and is required"
                },
                bookId: {
                    bsonType: "objectId",
                    description: "'bookId' must be a objectId and is required"
                }
            }
        }
    }
});

print('Borrowed collection is created successfully.');