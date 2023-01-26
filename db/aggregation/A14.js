// get which books has the lowest inventory, select five and show which people are borrowing it
const { mongodbURL } = require('../common/common.js');

db = connect(mongodbURL);

printjson(
  db.Authors.aggregate([
    {
      $sort: {
          numberStored: 1,
        },
    },
    {
      $limit: 5,
    },
    {
      $lookup: {
          from: 'Borrowed',
          localField: '_id',
          foreignField: 'bookId',
          as: 'borrowers',
        },
    },
    {
      $unwind: '$borrowers',
    },
    {
      $lookup: {
          from: 'People',
          localField: 'borrowers.borrowerId',
          foreignField: '_id',
          as: 'people',
        },
    },
    {
      $unwind: '$people',
    },
    {
      $project: {
          _id: 0,
          title: 1,
          name: {
            $concat: ['$people.firstName', ' ', '$people.lastName'],
          },
        },
    },
    {
      $group: {
          _id: '$title',
          borrowers: {
            $push: '$name',
          },
        },
    },
  ])
);
