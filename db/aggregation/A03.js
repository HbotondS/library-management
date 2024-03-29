// get publisher names where the most publisher is avaible, filtered, by phone numbers which are ending with 5
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
            input: {
              $filter: {
                input: '$publishers',
                as: 'p',
                cond: { $regexMatch: { input: '$$p.phone', regex: /5$/ } },
              },
            },
            as: 'p',
            in: { name: '$$p.name', phone: '$$p.phone' },
          },
        },
      },
    },
  ])
);
