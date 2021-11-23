import mongoose from 'mongoose';

const DestinationTourImages = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'Users' },
  count: { type: Number, default: 1 },
  imgName: { type: String },
  webUrl: { type: String },
  description: { type: String, default: '' },
  dateCreate: { type: Date, default: Date.now },
  dateUpdate: { type: Date, default: Date.now },
}, {
  versionKey: false,
});

export default mongoose.model('DestinationTourImages', DestinationTourImages, 'DestinationTourImages');
