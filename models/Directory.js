import mongoose from 'mongoose';

const directorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['file', 'folder'], required: true },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Directory', default: null }
});

const Directory = mongoose.model('Directory', directorySchema);

export default Directory;