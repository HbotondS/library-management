db = connect('mongodb://localhost');

db = db.getSiblingDB('library-management');

db.createCollection("Authors", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Authors object validation",
            required: ["peopleId", "genres", "knownFor"],
            properties: {
                peopleId: {
                    bsonType: "objectId",
                    description: "'peopleId' must be an ObjectId and is required"
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