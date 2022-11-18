const { addresses, phoneNumbers, randomFrom, mongodbURL, readJson, insertSuccessful } = require('../common/common.js');

let json = readJson('./data/publishers.json');

db = connect(mongodbURL);

for (key in json) {
    company = json[key];
    db.Publisher.insertOne({
        name: company["fake-company-name"],
        address: randomFrom(addresses),
        phone: randomFrom(phoneNumbers)
    });
}

insertSuccessful('Publisher');