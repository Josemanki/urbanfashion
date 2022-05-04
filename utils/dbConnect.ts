import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
const globalAny: any = global;

if (!MONGODB_URI) {
  throw new Error('You will have to define a MONGODB_URI on .env.local!');
}

let cached = globalAny.mongoose;

if (!cached) {
  cached = globalAny.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = { bufferCommands: false };
    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log('Connected to DB!');
        return mongoose;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;
