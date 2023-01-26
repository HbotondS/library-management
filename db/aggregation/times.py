# used to measure times of the aggreagation scripts

import subprocess
import os
import time


pathToFiles = '.'
files = [f for f in os.listdir(pathToFiles) if os.path.isfile(os.path.join(pathToFiles, f)) and f.endswith('js')]
for f in files:
    start = time.time()
    subprocess.run(''.join(['mongosh --file ', pathToFiles, '/', f]), stdout=subprocess.DEVNULL)
    end = time.time()
    print(''.join([f, ': ', "{:.2f}".format(end-start), 's']))