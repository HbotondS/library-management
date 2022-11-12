db = connect('mongodb://localhost');

db = db.getSiblingDB('library-management');

db.createCollection("Borrowed", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Borrowed object validation",
            required: ["id, borrowerId, bookId"],
            properties: {
                id: {
                    bsonType: "int",
                    description: "'id' must be a int and is required"
                },
                borrowerId: {
                    bsonType: "int",
                    description: "'borrowerId' must be an int and is required"
                },
                bookId: {
                    bsonType: "int",
                    description: "'bookId' must be a int and is required"
                }
            }
        }
    }
});

print('Borrowed collection is created successfully.');