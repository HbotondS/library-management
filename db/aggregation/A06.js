// get the most and least borrowed genre
const { mongodbURL } = require('../common/common.js');

db = connect(mongodbURL);

printjson(
  db.Book.aggregate([
    {
      $unwind: '$genres',
    },
    {
      $lookup: {
        from: 'Borrowed',
        localField: '_id',
        foreignField: 'bookId',
        as: 'borrowed',
      },
    },
    {
      $group: {
        _id: '$genres',
        count: { $sum: { $size: '$borrowed' } },
      },
    },
    {
      $sort: { count: -1 },
    },
    {
      $group: {
        _id: null,
        leastBorrowed: { $first: '$$ROOT' },
        mostBorrowed: { $last: '$$ROOT' },
      },
    },
  ])
); 
