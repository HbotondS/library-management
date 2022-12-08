#!/bin/bash
echo "sleeping for 10 seconds"
sleep 10

echo shard1_setup.sh time now: `date +"%T" `
mongosh --host shard2svr1:27017 <<EOF
  var cfg = {
    "_id": "shard2rs",
    "version": 1,
    "members": [
      {
        "_id": 0,
        "host": "shard2svr1:27017",
        "priority": 2
      },
      {
        "_id": 1,
        "host": "shard2svr2:27017",
        "priority": 0
      },
      {
        "_id": 2,
        "host": "shard2svr3:27017",
        "priority": 0
      }
    ]
  };
  rs.initiate(cfg);
  rs.status()
EOF