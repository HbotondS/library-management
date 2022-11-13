db = connect('mongodb://localhost');

db = db.getSiblingDB('library-management');

db.createCollection("Genre", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Genre object validation",
            required: ["id", "name"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "'name' must be a string and is required"
                }
            }
        }
    }
});

print('Genre collection is created successfully.');