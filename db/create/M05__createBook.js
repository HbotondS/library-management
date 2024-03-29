const { mongodbURL, createSuccessful } = require('../common/common.js');

db = connect(mongodbURL);

db.createCollection('Book', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Book object validation',
      required: ['title', 'genres', 'authors', 'publisherId', 'publishedDate', 'isbn'],
      properties: {
        title: {
          bsonType: 'string',
          description: "'title' must be an string and is required",
        },
        genres: {
          bsonType: 'array',
          minItems: 1,
          description: "'genres' must be an array of string and is required",
          items: {
            bsonType: 'string',
          },
        },
        authors: {
          bsonType: 'array',
          minItems: 1,
          description: "'authors' must be an array of string and is required",
          items: {
            bsonType: 'string',
          },
        },
        publisherId: {
          bsonType: 'objectId',
          description: "'publisherId' must be a objectId and is required",
        },
        publishedDate: {
          bsonType: 'date',
          description: "'publishedDate' must be a date and is required",
        },
        isbn: {
          bsonType: 'string',
          description: "'isbn' must be a string and is required",
        },
        translater: {
          bsonType: 'object',
          description: "'translater' must be an object",
          required: ['firstName', 'lastName'],
          properties: {
            firstName: {
              bsonType: 'string',
            },
            lastName: {
              bsonType: 'string',
            },
          },
        },
        numberStored: {
          bsonType: 'int',
          minimum: 0,
          description: "'numberStore' must be an int and is required",
        },
      },
    },
  },
});

createSuccessful('Book');