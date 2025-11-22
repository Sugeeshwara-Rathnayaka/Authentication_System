import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));
  await mongoose.connect(`${process.env.MONGODB_URI}/Authentication_System`);
};

//CLEAR Ex-:
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("Database Connected");
//   } catch (error) {
//     console.error("Database Connection Failed:", error.message);
//   }
// };

export default connectDB;
