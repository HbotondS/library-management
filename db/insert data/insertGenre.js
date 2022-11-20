const { mongodbURL, insertSuccessful } = require('../common/common.js');

var bookGenresArr = ['Adventure', 'Comic', 'Crime', 'Docufiction', 'Epistolary', 'Erotic', 'Fiction', 'Fantasy', 'Historical', 'Horror', 'Magic', 'realism', 'Mystery', 'Paranoid', 'Philosophical', 'Political', 'Romance', 'Saga', 'Satire', 'Science', 'Speculative', 'Superhero', 'Thriller', 'Urban', 'Western'];

db = connect(mongodbURL);

bookGenresArr.forEach((genre) => db.Genre.insertOne({ name: genre }));

insertSuccessful('Genre');