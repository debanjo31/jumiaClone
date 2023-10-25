import  {Schema, model} from 'mongoose';
import mongoose from 'mongoose';

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide your first name'],
  },
lastName: {
    type: String,
    required: [true, 'Please provide a last name'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please provide a contact phone number'],
  },
  additionPhoneNumber : {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Please provide a valid email address'],
    lowercase: true,
    unique: true,
  },
  isEmailConfirmed: {
    type: Boolean,
    default: false,
  },
  gender: {
    type: String,
    enum : {
      values: ["male", "female"],
      message: 'gender not supported'
    },
    required: [true, 'Please provide your gender'],
  },
  dob : {
    type : Date,
    required: [true, 'Please provide your date of birth'],
  },
  addressBook : [{
    address: {
      type: String,
    },
    region : {
      type: String,
    },
    city : {
      type: String,
    },
  }],
  orders : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  }],
  followedSellers : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
  }],
});

export const User = model('User', userSchema);



