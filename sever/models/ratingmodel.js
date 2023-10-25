import  {Schema, model} from 'mongoose';
import mongoose from 'mongoose';

const ratingSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User0",
    required: true 
  },
  useerName : {
    type: String,
    required: true 
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true  
  },
  review: {
    type: String,
    required: true 
  },
  status: {
    type: Number,
    enum : {
      values: [1, 2, 3, 4, 5],
      message: 'rating not supported'
    },
    default: 1,
    required: true 
  },
  date: {
    type: Date,
    default: Date.now
  },
},
    {
        timestamps: true
    }
);

export const Rating = model('Rating', ratingSchema);
 