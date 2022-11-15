db = connect('mongodb://localhost');

db = db.getSiblingDB('library-management');

db.createCollection("Book", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Book object validation",
            required: ["title", "genre", "authors", "publisherId", "publishedDate", "isbn"],
            properties: {
                title: {
                    bsonType: "string",
                    description: "'title' must be an string and is required"
                },
                genre: {
                    bsonType: ["string"],
                    description: "'genre' must be a string and is required"
                },
                authors: {
                    bsonType: ["string"],
                    description: "'authors' must be a string and is required"
                },
                publisherId: {
                    bsonType: "objectId",
                    description: "'publisherId' must be a objectId and is required"
                },
                publishedDate: {
                    bsonType: "date",
                    description: "'publishedDate' must be a date and is required"
                },
                isbn: {
                    bsonType: "string",
                    description: "'isbn' must be a string and is required"
                },
                translater: {
                    bsonType: "string",
                    description: "'translater' must be a string"
                }
            }
        }
    }
});

print('Book collection is created successfully.');