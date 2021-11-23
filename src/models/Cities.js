import mongoose from 'mongoose';

const Cities = mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  state_id: { type: Number },
}, {
  versionKey: false,
});

export default mongoose.model('Cities', Cities, 'Cities');
