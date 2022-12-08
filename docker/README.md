## Set up Sharding using Docker Containers

### Config server
Navigate to the config-server folder and start the config servers (3 memeber replica set)
```
docker compose up -d
```
After the replica set containers are up, there is a fourth container which will initialize the replica set setup.

### Shard servers
Run the docker compose files in both shard1 & shard2 folder, which will create the replica set containers and will initialize the replica set similar like the config server.

### Mongos Router
Navigate to mongos folder and start the mongos container:
```
docker compose up -d
```
After the container is running, follow the instructions in the [readme](./mongos/README.md) to how to add the shards to MongoDB.
