import mongoose from 'mongoose';

const Chats = mongoose.Schema({
  senderId: { type: mongoose.Schema.ObjectId, ref: 'Users' }, // GURU or tour guide or business
  receiverId: { type: mongoose.Schema.ObjectId, ref: 'Users' },
  channelUrl: { type: String },
  dateCreate: { type: Date, default: Date.now },
  dateUpdate: { type: Date, default: Date.now },
}, {
  versionKey: false,
});

export default mongoose.model('Chats', Chats, 'Chats');
