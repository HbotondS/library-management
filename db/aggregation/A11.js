// what kind of genres do people read
const { mongodbURL } = require('../common/common.js');

db = connect(mongodbURL);

printjson(
  db.Borrowed.aggregate([
    {
      $lookup: {
        from: 'People',
        localField: 'borrowerId',
        foreignField: '_id',
        as: 'borrower',
      },
    },
    {
      $unwind: '$borrower',
    },
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
      $project: {
        _id: 0,
        name: { $concat: ['$borrower.firstName', ' ', '$borrower.lastName'] },
        genres: '$book.genres',
      },
    },
  ])
);
