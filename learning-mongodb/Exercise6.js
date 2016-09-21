
var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'+process.argv[2]

mongo.connect(url, function(err, db) {
  if (err) 
    console.log(err)
  var users = db.collection('users')

  users.update(
    {username: 'tinatime'},
    { $set:{
       age : 40
      }
    }
  ,function(err,data){
    if(err) 
      console.log(err)
    db.close();
  })
}) 
