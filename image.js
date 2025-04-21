 
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  type: {
    type: String,
    enum: ['crop', 'nursery', 'other'],
    default: 'other'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Image', imageSchema);
