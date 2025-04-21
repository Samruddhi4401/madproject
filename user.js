const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true }, // General mobile number
  role: { 
    type: String, 
    enum: ['farmer', 'nurseryOwner'], // Role is either 'farmer' or 'nurseryOwner'
    required: true 
  },

  // Farmer-specific fields
  farmerArea: { type: String },
  farmerAddress: { type: String },

  // Nursery Owner-specific fields
  nurseryName: { type: String },
  ownerName: { type: String },
  nurseryAddress: { type: String }
});

module.exports = mongoose.model('User', userSchema);
