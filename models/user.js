const mongodb = require("mongodb");
const getDb= require("../util/database").getDb
const ObjectId =mongodb.ObjectId
class User{
  constructor(name, email){
    this.name= name;
    this.email= email;
  }
  save(){
    const db= getDb();
    return db.collection('user').insertOne(this)
    
  }
  static findById(prodId){
    const db= getDb();
    return db.collection('user').findOne({ _id: new mongodb.ObjectId(prodId)})
  }
}
module.exports = User;
