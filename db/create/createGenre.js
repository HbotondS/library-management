const { mongodbURL, createSuccessful } = require('../common/common.js');

db = connect(mongodbURL);

db.createCollection('Genre', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Genre object validation',
      required: ['name'],
      properties: {
        name: {
          bsonType: 'string',
          description: "'name' must be a string and is required",
        },
      },
    },
  },
});

createSuccessful('Genre');