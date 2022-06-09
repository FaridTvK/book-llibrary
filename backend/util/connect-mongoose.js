import mongoose from 'mongoose';
import "dotenv/config"

async function connnectToMongoose() {
  const _pwd = process.env.MONGO_DB_PWD;
  const _database = "Book-shop";
  const _user= "Admin"
  const _cluster = "cluster0.duxzi.mongodb.net"
  const _uri = `mongodb+srv://${_user}:${_pwd}@${_cluster}/${_database}?retryWrites=true&w=majority`;
 
  try {
    await mongoose.connect(_uri);
    const collections =  (await mongoose.connection.db.listCollections().toArray()).map(el => el.name);
    console.log(`collections of '${_database}' db`, collections );
  } catch (error) {
    console.error('Could not connect to mongoose', error)
    return false;
  }

  return true;
}

export default connnectToMongoose;
