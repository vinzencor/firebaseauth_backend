import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    uid: { type: String, required: true },
    email: { type: String, required: true },
  });


  const user = mongoose.model('User_Details', userSchema)
  export default user