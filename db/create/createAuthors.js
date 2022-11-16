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
                    bsonType: "array",
                    minItems: 1,
                    description: "'genres' must be an array of objectId and is required",
                    items: {
                        bsonType: "objectId"
                    }
                },
                knownFor: {
                    bsonType: "array",
                    description: "'knownFor' must be an array string and is required",
                    minItems: 1,
                    items: {
                        bsonType: "string"
                    }
                }
            }
        }
    }
});

print('Authors collection is created successfully.');