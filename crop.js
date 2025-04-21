 
const Crop = require('../models/crop'); // Import Crop model
const mongoose = require('mongoose');

// Create a new crop
const createCrop = async (req, res) => {
  try {
    const { name, category, } = req.body;
    const crop = new Crop({ name, category }); // Create new Crop instance
    await crop.save(); // Save crop to the database
    res.status(201).json(crop); // Send back the created crop
  } catch (err) {
    res.status(500).json({ error: 'Failed to create crop' });
  }
};

module.exports = { createCrop }; // Export the controller function


// Define the schema for Crop
const cropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },

  
  // Reference to the User model
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // This tells Mongoose to reference the 'User' model
    required: true
  }
});

// Create the Crop model using the cropSchema
const Crop = mongoose.model('Crop', cropSchema);

// Export the Crop model
module.exports = Crop;
const express = require('express');
const router = express.Router();


