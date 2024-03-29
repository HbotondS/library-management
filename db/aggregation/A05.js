// who borrowed the most books
const { mongodbURL } = require('../common/common.js');

db = connect(mongodbURL);

printjson(
  db.Borrowed.aggregate([
    {
      $group: {
        _id: '$borrowerId',
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
        from: 'People',
        localField: '_id',
        foreignField: '_id',
        as: 'Borrower',
      },
    },
    {
      $project: {
        _id: 0,
        name: {
          $concat: [{ $arrayElemAt: ['$Borrower.firstName', 0] }, ' ', { $arrayElemAt: ['$Borrower.lastName', 0] }],
        },
      },
    },
  ])
);
