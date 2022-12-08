#!/bin/bash
echo "sleeping for 10 seconds"
sleep 10

echo config_setup.sh time now: `date +"%T" `
mongosh --host cfgsvr1:27017 <<EOF
  var cfg = {
    "_id": "cfgrs",
    "version": 1,
    "members": [
      {
        "_id": 0,
        "host": "cfgsvr1:27017",
        "priority": 2
      },
      {
        "_id": 1,
        "host": "cfgsvr2:27017",
        "priority": 0
      },
      {
        "_id": 2,
        "host": "cfgsvr3:27017",
        "priority": 0
      }
    ]
  };
  rs.initiate(cfg);
  rs.status()
EOF