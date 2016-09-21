
var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var age = process.argv[2]

mongo.connect(url, function(err, db) {
  if (err) 
    console.log(err)
  var parrots = db.collection('parrots')

  parrots.count(
    {
      age: {
        $gt: +age
      }
    }
  ,function(err,data){
    if(err) 
      console.log(err)
    console.log(data)
    db.close();
  })
}) 
