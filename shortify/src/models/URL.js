import mongoose from 'mongoose';
import shortid from 'shortid';

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortId: { type: String, required: true, default: shortid.generate },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.URL || mongoose.model('URL', urlSchema);
