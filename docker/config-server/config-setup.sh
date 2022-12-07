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
        "host": "172.24.16.1:40001",
        "priority": 2
      },
      {
        "_id": 1,
        "host": "172.24.16.1:40002",
        "priority": 0
      },
      {
        "_id": 2,
        "host": "172.24.16.1:40003",
        "priority": 0
      }
    ]
  };
  rs.initiate(cfg);
  rs.status()
EOF