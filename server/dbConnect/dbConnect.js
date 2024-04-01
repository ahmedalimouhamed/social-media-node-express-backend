import mongoose from "mongoose";

export const dbConnect = () => {
  try{
    mongoose.connect(process.env.DB_URL);
    console.log("db has been connected successfully");
  }catch(error){
    console.log(error);
  }
}