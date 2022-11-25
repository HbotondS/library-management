## Set up Sharding using Docker Containers

### Config server
Navigate to the config-server folder and start the config servers (3 memeber replica set)
```
docker compose up -d
```
After the servers are running, initialize the replica set with the following command:
```
mongosh 172.29.160.1:40001 --file config_replicaset.mongodb
```

### Shard server
Navigate to shard1 folder and start the shard1 servers (3 member replica set)
```
docker compose up -d
```
After the servers are running, initialize the replica set with the following command:
```
mongosh 172.29.160.1:50001 --file shard_replicaset.mongodb
```

### Mongos Router
Navigate to mongos folder and start the mongos server
```
docker compose up -d
```
After the server is running, add shards with the following command:
```
mongosh 172.29.160.1:60000 --file mongos.mongodb
```
