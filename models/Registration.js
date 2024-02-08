import mongoose from "mongoose";

const { Schema } = mongoose;

const registrationModel = new Schema({
  email: { type: String, required: true, unique: true },
});

const Registration = mongoose.model("Registration", registrationModel);

export default Registration;
