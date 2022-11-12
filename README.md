[![forthebadge](https://forthebadge.com/images/badges/powered-by-black-magic.svg)](https://forthebadge.com)
# library-management
Library management database with MongoDB for Advanced databases system university course.


### Entity relationship diagram:
The diagram was created with [Lucid App](https://lucid.app)
<img src=./docs/erd.png />

### Relationship model:
The model was created with [dbdiagram.io](https://dbdiagram.io/).
<img src=./docs/em.png />

### Migration
If you have MongoDB Shell installed you can proceed to the next step, if don't, you can install it from [here](https://www.mongodb.com/try/download/shell) and add it to the path variables. <br>
You can run a migration scripts directly from the shell, with the following command: ```mongosh --file <file name>``` <br>
If you don't want to run every script manually there is a python script, under ```db/migration scripts``` which runs all the migration scripts.
