const fs = require('fs');
const { addresses, phoneNumbers, randomFrom } = require('./common.js');

let rawdata = fs.readFileSync('./data/publishers.json');
let json = JSON.parse(rawdata);

db = connect('mongodb://localhost/library-management');

for (key in json) {
    company = json[key];
    db.Publisher.insertOne({
        name: company["fake-company-name"],
        address: randomFrom(addresses),
        phone: randomFrom(phoneNumbers)
    });
}