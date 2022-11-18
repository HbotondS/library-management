const { mongodbURL, insertSuccessful } = require('../common/common.js');

db = connect(mongodbURL);

for (var i = 0; i <= 9999; i++) {
    bookId = publisher = db.Book.aggregate([{$sample: {size: 1}}, {$project: {_id: 1}}])
                                .toArray()[0]["_id"];

    db.Inventory.insertOne({
        bookId: bookId,
        numberStored: Math.floor(Math.random() * 100)
    });
}

insertSuccessful('Inventory');