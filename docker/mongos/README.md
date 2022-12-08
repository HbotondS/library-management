# Add shard1 to mongos
Connect to mongos container: `mongosh localhost:60000` <br>
Then using the following comand add the shard1 replica set: `sh.addShard("shard1rs/shard1svr1,shard1svr2,shard1svr3")` <br>
Similar to the first shard, add the shard2: `sh.addShard("shard2rs/shard2svr1,shard2svr2,shard2svr3")`
