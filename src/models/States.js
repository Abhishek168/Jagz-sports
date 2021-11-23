import mongoose from 'mongoose';

const States = mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  country_id: { type: Number },
}, {
  versionKey: false,
});

export default mongoose.model('States', States, 'States');
