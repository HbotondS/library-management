import subprocess
import os

# this script is used to execute the MongoDB schema creation scripts located in db/create folder

files = [f for f in os.listdir('../create')]
for f in files:
    subprocess.run("mongosh --file ../create/" + f)