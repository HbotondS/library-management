// get authors grouped by genre
const { mongodbURL } = require('../common/common.js');

db = connect(mongodbURL);

printjson(
  db.Authors.aggregate([
    {
      $lookup: {
        from: 'People',
        localField: 'peopleId',
        foreignField: '_id',
        as: 'people',
      },
    },
    {
      $unwind: '$genres',
    },
    {
      $lookup: {
        from: 'Genre',
        localField: 'genres',
        foreignField: '_id',
        as: 'genres',
      },
    },
    {
      $group: {
        _id: '$genres.name',
        authors: {
          $push: {
            $concat: [{ $arrayElemAt: ['$people.lastName', 0] }, ' ', { $arrayElemAt: ['$people.firstName', 0] }],
          },
        },
      },
    },
  ])
);
