import subprocess
import os

# this script is used to insert data into MongoDB database using the scripts located in db/create folder

pathToFiles = '../insert_data'
os.chdir(pathToFiles)
files = [f for f in os.listdir() if os.path.isfile(os.path.join(pathToFiles, f))]
for f in files:
    subprocess.run(''.join(['mongosh --file ', f]))