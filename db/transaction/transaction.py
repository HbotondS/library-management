from pymongo import MongoClient
from pymongo.errors import OperationFailure

client = MongoClient("mongodb://localhost:60000/")
db = client['library-management']

session = client.start_session()

try:
    session.start_transaction()
    
    db.Book.update_one({'title': 'Lynch'}, {'$inc': {'numberStored': -1}})
    db.Publisher.insert_one({
        'name': 'Dark Horse Comics',
        'address': 'Milwaukie, Oregon, US',
        'phone': '(503) 652-8815'
    })

    session.commit_transaction()
    
except OperationFailure as e:
    session.abort_transaction()
    print(e)
