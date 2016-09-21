
var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'+process.argv[2]

mongo.connect(url, function(err, db) {
  if (err) 
    console.log(err)
  var users = db.collection(process.argv[3])

  users.remove(
    {_id : process.argv[4]}
  ,function(err,data){
    if(err) 
      console.log(err)
    db.close();
  })
}) 
