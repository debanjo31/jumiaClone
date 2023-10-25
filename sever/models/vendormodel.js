import  {Schema, model} from 'mongoose';
import mongoose from 'mongoose';

const vendorSchema = new Schema({
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
    product : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    order : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
    }
  }],
  savedItems : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  }],
});

export const Vendor = model('User', vendorSchema);



