# Add shard1 to mongos
Connect to mongos container: `mongosh localhost:60000` <br>
Then using the following comand add the shard1 replica set: `sh.addShard("shard1rs/shard1svr1,shard1svr2,shard1svr3")`
