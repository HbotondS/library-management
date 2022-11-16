db = connect('mongodb://localhost/library-management');

for (var i = 0; i <= 9999; i++) {
    bookId = publisher = db.Book.aggregate([{$sample: {size: 1}}, {$project: {_id: 1}}])
                                .toArray()[0]["_id"];

    db.Inventory.insertOne({
        bookId: bookId,
        numberStored: Math.floor(Math.random() * 100)
    });
}