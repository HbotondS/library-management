db = connect('mongodb://localhost/library-management');

for (var i = 0; i <= 99; i++) {
    bookId = db.Book.aggregate([{$sample: {size: 1}}, {$project: {_id: 1}}])
                                .toArray()[0]["_id"];

    borrowerId = db.People.aggregate([{$sample: {size: 1}}, {$project: {_id: 1}}])
                                .toArray()[0]["_id"];

    db.Borrowed.insertOne({
        borrowerId: borrowerId,
        bookId: bookId
    });
}