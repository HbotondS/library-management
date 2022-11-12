import subprocess
import os

# this script is used to execute the MongoDB schema creation scripts located in this folder

files = [f for f in os.listdir('.') if os.path.isfile(f)]
for f in files:
    # print(f)
    subprocess.run("mongosh --file " + f)