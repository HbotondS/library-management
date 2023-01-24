// get books which were published between 2000 and 2005
const { mongodbURL } = require('../common/common.js');

db = connect(mongodbURL);

printjson(
  db.Book.aggregate([
    {
      $match: {
        publishedDate: {
          $gte: new Date('2000-01-01'),
          $lt: new Date('2006-01-01'),
        },
      },
    },
    {
      $project: {
        title: 1,
        publishedDate: 1,
      },
    },
  ])
);
