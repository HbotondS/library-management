const { progress, mongodbURL, readJson, insertSuccessful } = require('../common/common.js');

let json = readJson('./data/books.json');

db = connect(mongodbURL);

for (var key in json) {
    nrAuthors = Math.floor(Math.random() * 2) + 1;
    authorNames = db.Authors.aggregate([
            {$lookup: {from: "People", localField: "peopleId", foreignField: "_id", as: "details"}},
            {$sample: {size: nrAuthors}}, 
            {$project: {_id: 0, details: 1}}]
        )
        .toArray()
        .map(value => {
            authorDetails = value.details[0];
            return `${authorDetails.firstName} ${authorDetails.lastName}`;
        });
    nrGenres = Math.floor(Math.random() * 3) + 1;
    genres = db.Genre.aggregate([{$sample: {size: nrGenres}}, {$project: {_id: 0, name: 1}}])
                        .toArray()
                        .map(value => value.name);
    publisher = db.Publisher.aggregate([{$sample: {size: 1}}, {$project: {_id: 1}}])
                        .toArray()[0]["_id"];
    translater = db.People.aggregate([{$sample: {size: 1}}, {$project: {_id: 0, firstName: 1, lastName: 1}}])
                        .toArray()[0];

    db.Book.insertOne({
        title: json[key].title,
        genres: genres,
        authors: authorNames,
        publisherId: publisher,
        publishedDate: new Date(new Date() - Math.random()*(1e+12)),
        isbn: json[key].isbn,
        translater: {
            firstName: translater.firstName,
            lastName: translater.lastName
        }
    });

    progress(key, 999);
}

insertSuccessful('Book');