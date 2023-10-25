import  {Schema, model} from 'mongoose';
import mongoose from 'mongoose';

const adminSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide your first name'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please provide a contact phone number'],
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
});

export const User = model('Admin', adminSchema);



