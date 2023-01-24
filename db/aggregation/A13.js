// get authors grouped by publishers
const { mongodbURL } = require('../common/common.js');

db = connect(mongodbURL);

printjson(
  db.Book.aggregate([
    {
      $lookup: {
        from: 'Publisher',
        localField: 'publisherId',
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
        authors: { $push: '$authors' },
      },
    },
    {
      $project: {
        _id: 0,
        publisher: '$_id',
        authors: 1,
      },
    },
  ])
);
