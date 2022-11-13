var bookGenresArr = ['Adventure', 'Comic', 'Crime', 'Docufiction', 'Epistolary', 'Erotic', 'Fiction', 'Fantasy', 'Historical', 'Horror', 'Magic', 'realism', 'Mystery', 'Paranoid', 'Philosophical', 'Political', 'Romance', 'Saga', 'Satire', 'Science', 'Speculative', 'Superhero', 'Thriller', 'Urban', 'Western'];

db = connect('mongodb://localhost/library-management');

bookGenresArr.forEach(genre => db.Genre.insertOne({name: genre}));