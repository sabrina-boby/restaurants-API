import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log("Boby your database connected successfully");
    })
    .catch((err) => {
      console.log(`Boby Some error occured while connecting to database ${err}`);
    });
};
