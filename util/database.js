const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const MongoConnect= callback=>{
  MongoClient.connect('mongodb+srv://nodejs:batho123@cluster0.ipyxs.mongodb.net/myFirstDatabase?retryWrites=true&w=majoritys')
  .then(result=>{ 
    console.log('Connected'),
    callback(result)
    })
  .catch(err=>{console.log(err)}
    );
}

module.exports =MongoConnect