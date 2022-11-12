db = connect('mongodb://localhost');

db = db.getSiblingDB('library-management');

db.createCollection("Authors", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Authors object validation",
            required: ["id, genres, knownFor"],
            properties: {
                id: {
                    bsonType: "int",
                    description: "'id' must be a int and is required"
                },
                genres: {
                    bsonType: ["int"],
                    description: "'genres' must be a string and is required"
                },
                knownFor: {
                    bsonType: ["string"],
                    description: "'knownFor' must be a string and is required"
                }
            }
        }
    }
});

print('Authors collection is created successfully.');