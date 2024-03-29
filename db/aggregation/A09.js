// get peoples who are also named like the most borrowed book's author
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
      $unwind: '$book',
    },
    {
      $project: {
        _id: 0,
        name: '$book.authors',
      },
    },
    {
      $unwind: '$name',
    },
    {
      $lookup: {
        from: 'People',
        let: { name: '$name' },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ['$$name', { $concat: ['$firstName', ' ', '$lastName'] }],
              },
            },
          },
        ],
        as: 'people',
      },
    },
  ])
);
