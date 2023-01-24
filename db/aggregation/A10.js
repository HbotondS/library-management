// who is the oldest borrower
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
      $sort: { 'borrower.born': -1 },
    },
    {
      $limit: 1,
    },
    {
      $project: {
        _id: 0,
        name: { $concat: ['$borrower.firstName', ' ', '$borrower.lastName'] },
        born: '$borrower.born',
      },
    },
  ])
);
