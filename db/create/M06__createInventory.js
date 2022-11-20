const { mongodbURL, createSuccessful } = require('../common/common.js');

db = connect(mongodbURL);

db.createCollection('Inventory', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Inventory object validation',
      required: ['numberStored', 'bookId'],
      properties: {
        numberStored: {
          bsonType: 'int',
          minimum: 0,
          description: "'numberStored' must be an int and is required",
        },
        bookId: {
          bsonType: 'objectId',
          description: "'bookId' must be a objectId and is required",
        },
      },
    },
  },
});

createSuccessful('Inventory');