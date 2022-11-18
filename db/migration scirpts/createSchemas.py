import subprocess
import os

# this script is used to execute the MongoDB schema creation scripts located in db/create folder

pathToFiles = '../create'
files = [f for f in os.listdir(pathToFiles) if os.path.isfile(os.path.join(pathToFiles, f))]
for f in files:
    subprocess.run(''.join('mongosh --file', pathToFiles, f))