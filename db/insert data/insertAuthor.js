const fs = require('fs');

let rawdata = fs.readFileSync('./data/bookTitles.json');
let json = JSON.parse(rawdata);

db = connect('mongodb://localhost/library-management');

for (var key in json) {
    peopleId = db.People.aggregate([{$sample: {size: 1}}, {$project: {_id: 1}}]).toArray()[0]["_id"];
    genres = db.Genre.aggregate([{$sample: {size: 2}}, {$project: {_id: 1}}]).toArray().map(value => value._id);

    db.Authors.insertOne({
        peopleId: peopleId,
        genres: genres,
        knownFor: [json[key].name]
    });
}
