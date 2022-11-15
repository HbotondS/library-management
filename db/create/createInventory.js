db = connect('mongodb://localhost');

db = db.getSiblingDB('library-management');

db.createCollection("Inventory", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Inventory object validation",
            required: ["numberStored", "bookId"],
            properties: {
                numberStored: {
                    bsonType: "int",
                    description: "'numberStored' must be an int and is required"
                },
                bookId: {
                    bsonType: "objectId",
                    description: "'bookId' must be a objectId and is required"
                }
            }
        }
    }
});

print('Inventory collection is created successfully.');