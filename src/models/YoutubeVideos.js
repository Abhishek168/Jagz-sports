import mongoose from 'mongoose';

const YoutubeVideos = mongoose.Schema({
  videoId: { type: String },
  snippet: { type: Object, default: {} },
  dateCreate: { type: Date, default: Date.now },
  dateUpdate: { type: Date, default: Date.now },
}, {
  versionKey: false,
});

export default mongoose.model('YoutubeVideos', YoutubeVideos, 'YoutubeVideos');
