// which is the most popular publisher
const { mongodbURL } = require('../common/common.js');

db = connect(mongodbURL);

printjson(
  db.Borrowed.aggregate([
    {
      $lookup: {
        from: 'Book',
        localField: 'bookId',
        foreignField: '_id',
        as: 'book',
      },
    },
    {
      $unwind: '$book',
    },
    {
      $lookup: {
        from: 'Publisher',
        localField: 'book.publisherId',
        foreignField: '_id',
        as: 'publisher',
      },
    },
    {
      $unwind: '$publisher',
    },
    {
      $group: {
        _id: '$publisher.name',
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
      $project: {
        _id: 0,
        publisher: '$_id',
        borrowedCount: '$count',
      },
    },
  ])
);
