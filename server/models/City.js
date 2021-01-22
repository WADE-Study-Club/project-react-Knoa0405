import mongoose from 'mongoose';

const citySchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 20,
  },
  temp: {
    type: Number,
    maxlength: 20,
  },
  weather: {
    type: String,
    maxlength: 20,
  },
});

const City = mongoose.model('City', citySchema);

export default City;
