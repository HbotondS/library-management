// get the location where the most publisher is avaible
const { mongodbURL } = require('../common/common.js');

db = connect(mongodbURL);

printjson(
  db.Publisher.aggregate([
    {
      $group: {
        _id: '$address',
        count: { $sum: 1 },
      },
    },
    {
      $sort: { count: -1 },
    },
    {
      $limit: 1,
    },
  ])
);
