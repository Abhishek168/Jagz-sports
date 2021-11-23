import mongoose from 'mongoose';

const UserActivities = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'Users' },
  activity: { type: String, default: '' },
  dateCreate: { type: Date, default: Date.now },
  dateUpdate: { type: Date, default: Date.now },
}, {
  versionKey: false,
});

export default mongoose.model('UserActivities', UserActivities, 'UserActivities');
