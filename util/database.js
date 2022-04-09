const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
  let _db
  const MongoConnect= callback=>{
    MongoClient.connect('mongodb+srv://nodejs:batho123@cluster0.ipyxs.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client=>{ 
      console.log('Connected'),
      _db=client.db()
      callback()
      })
    .catch(err=>{ 
        console.log(err)
        throw err
        }
      );
}
const getDb=()=>{
  if(_db){
    return _db
  }
  throw 'No database found'
}

exports.mongoConnect =MongoConnect
exports.getDb=getDb