import mongoose from 'mongoose';

const Countries = mongoose.Schema({
  id: { type: Number },
  sortname: { type: String },
  name: { type: String },
  phonecode: { type: Number },
}, {
  versionKey: false,
});

export default mongoose.model('Countries', Countries, 'Countries');
