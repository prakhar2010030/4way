import mongoose from "mongoose";

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "4way" })
    .then((res) =>
      console.log(`db is connected through connection : ${res.connection.host}`)
    )
    .catch((err) => console.log(err));
};

export default connectDb;
