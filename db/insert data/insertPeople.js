const { addresses, phoneNumbers, randomFrom, progress, mongodbURL, insertSuccessful } = require('../common/common.js');

firstNames = ['Alexandra', 'Vivien', 'Viktoria', 'Dora', 'Nikolett', 'Fanni', 'Eszter', 'Barbara', 'Anna', 'Klaudia', 'Zsofia', 'Krisztina', 'Reka', 'Kitti', 'Petra', 'Renata', 'Bettina', 'Evelin', 'Adrienn', 'Eniko', 'Brigitta', 'Cintia', 'Bianka', 'Anita', 'Andrea', 'Laura', 'Noemi', 'Boglarka', 'Bernadett', 'Katalin', 'Fruzsina', 'Nikoletta', 'Nora', 'Dorina', 'Rebeka', 'Regina', 'Anett', 'Dorottya', 'Szilvia', 'Lilla', 'Monika', 'Timea', 'Zsanett', 'Agnes', 'Kinga', 'Zsuzsanna', 'Eva', 'Szabina', 'Dalma', 'Gabriella', 'Diana', 'Orsolya', 'Maria', 'Beatrix', 'Edina', 'Dominika', 'Henrietta', 'Greta', 'Judit', 'Erika', 'Csilla', 'Virag', 'Emese', 'Melinda', 'Ramona', 'Aniko', 'Luca', 'Ildiko', 'Veronika', 'Mercedesz', 'Erzsebet', 'Annamaria', 'Ivett', 'Sara', 'Tunde', 'Georgina', 'Rita', 'Flora', 'Dzsenifer', 'Lili', 'Szimonetta', 'Beata', 'Hajnalka', 'Tamara', 'Kata', 'Adam', 'Daniel', 'Tamas', 'Bence', 'Peter', 'David', 'Mark', 'Laszlo', 'Zoltan', 'Krisztian', 'Mate', 'Gabor', 'Attila', 'Richard', 'Balazs', 'Istvan', 'Zsolt', 'Norbert', 'Gergo', 'Roland', 'Janos', 'Jozsef', 'Sandor', 'Martin', 'Balint', 'Andras', 'Patrik', 'Csaba', 'Robert', 'Kristof', 'Tibor', 'Akos', 'Szabolcs', 'Ferenc', 'Viktor', 'Gergely', 'Marton', 'Levente', 'Marcell', 'Alex', 'Erik', 'Imre', 'Mihaly', 'Miklos', 'Gyorgy', 'Benjamin', 'Matyas', 'Aron', 'Milan', 'Lajos', 'Barnabas', 'Gyula', 'Dominik', 'Karoly', 'Oliver', 'Bela', 'Szilard', 'Zsombor', 'Adrian', 'Pal', 'Nandor', 'Arpad', 'Mario', 'Renato', 'Szilveszter', 'Kornel', 'Benjamin', 'Benedek', 'Antal', 'Arnold', 'Denes', 'Botond', 'Geza', 'Valentin', 'Kalman', 'Abel', 'Rajmund', 'Soma', 'Krisztofer', 'Bertalan', 'Kevin', 'Vilmos', 'Barna', 'Henrik', 'Endre'];
lastNames = ['Nagy', 'Lukacs', 'Jonas', 'Kovacs', 'Gulyas', 'Szucs', 'Toth', 'Biro', 'Hajdu', 'Szabo', 'Kiraly', 'Halasz', 'Horvath', 'Balog', 'Mate', 'Varga', 'Laszlo', 'Szekely', 'Kiss', 'Bogdan', 'Gaspar', 'Molnar', 'Jakab', 'Kozma', 'Nemeth', 'Katona', 'Pasztor', 'Farkas', 'Sandor', 'Bakos', 'Balogh', 'Varadi', 'Dudas', 'Papp', 'Boros', 'Virag', 'Lakatos', 'Fazekas', 'Major', 'Takacs', 'Kelemen', 'Orban', 'Juhasz', 'Antal', 'Hegedus', 'Olah', 'Orosz', 'Barna', 'Meszaros', 'Somogyi', 'Novak', 'Simon', 'Fulop', 'Soos', 'Racz', 'Veres', 'Tamas', 'Fekete', 'Budai', 'Nemes', 'Szilagyi', 'Vincze', 'Pataki', 'Torok', 'Hegedus', 'Balla', 'Feher', 'Deak', 'Farago', 'Balazs', 'Pap', 'Kerekes', 'Gal', 'Balint', 'Barta', 'Kis', 'Illes', 'Peter', 'Szucs', 'Pal', 'Borbely', 'Orsos', 'Vass', 'Csonka', 'Kocsis', 'Szoke', 'Mezei', 'Fodor', 'Fabian', 'Sarkozi', 'Pinter', 'Voros', 'Berki', 'Szalai', 'Lengyel', 'Marton', 'Sipos', 'Bognar', 'Magyar', 'Bodnar'];

db = connect(mongodbURL);

for (var i = 0; i <= 999999; i++) {
    db.People.insertOne({
        firstName: randomFrom(firstNames),
        lastName: randomFrom(lastNames),
        born: new Date(new Date() - Math.random()*(1e+12)),
        phone: randomFrom(phoneNumbers),
        address: randomFrom(addresses)
    });
    progress(i, 999999);
}

insertSuccessful('People');