// what is the most borrowed book, and how many time was it borrowed
const { mongodbURL } = require('../common/common.js');

db = connect(mongodbURL);

printjson(
  db.Borrowed.aggregate([
    {
      $group: {
        _id: '$bookId',
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
        from: 'Book',
        localField: '_id',
        foreignField: '_id',
        as: 'book',
      },
    },
    {
      $project: {
        _id: 0,
        title: { $arrayElemAt: ['$book.title', 0] },
        count: 1,
      },
    },
  ])
);
