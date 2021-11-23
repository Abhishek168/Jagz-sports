import mongoose from 'mongoose';

const LodgeImages = mongoose.Schema({
  imgUrl: { type: String },
  dateCreate: { type: Date, default: Date.now },
  dateUpdate: { type: Date, default: Date.now },
}, {
  versionKey: false,
});

export default mongoose.model('LodgeImages', LodgeImages, 'LodgeImages');
