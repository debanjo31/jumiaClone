import  {Schema, model} from 'mongoose';
import mongoose from 'mongoose';

const vendorSchema = new Schema({
  shopName: {
    type: String,
    required: [true, 'Please provide your first name'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  shopInfo : [{
    accountType: {
      type: String,
      enum : {
        values: ["business", "individual"],
        message: 'supported'
      },
      required: [true, 'Please provide your gender'],
    },
    shopZone: {
      type: String,
      required: [true, 'business state'],
    },
    shopAddress: {
      type: String,
      required: [true, 'business address'],
    },
  }],
  businessInfo : [{
    ownerName : {
      type: String,
    },
    ownerTaxId : {
      type: String,
    },
    ownerAddress : {
      type: String,
    },
    ownerPhone : {
      type: String,
    },
    ownerId : {
      type: String,
    },
    ownerIdNumber : {
      type: String,
    },
  }],
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



