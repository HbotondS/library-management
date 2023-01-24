// get publisher names where the most publisher is avaible
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
    {
      $lookup: {
        from: 'Publisher',
        localField: '_id',
        foreignField: 'address',
        as: 'publishers',
      },
    },
    {
      $project: {
        _id: 0,
        address: '$_id',
        publishers: {
          $map: {
            input: '$publishers',
            as: 'p',
            in: '$$p.name',
          },
        },
      },
    },
  ])
);
