const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Sign-up (create new user)
const signUp = async (req, res) => {
  try {
    const { name, phoneNumber, role, farmerArea, farmerAddress, nurseryName, ownerName, nurseryAddress } = req.body;

    // Check if the user already exists (based on phoneNumber)
    const existingUser = await User.findOne({ phoneNumber });
    if (existingUser) {
      return res.status(400).json({ message: 'mobile number already registered' });
    }

    // Create a new user object based on the role
    const newUserData = {
      name,
      phoneNumber,
      role,
    };

    // Add specific data based on user role
    if (role === 'farmer') {
      newUserData.farmerArea = farmerArea;
      newUserData.farmerAddress = farmerAddress;
    } else if (role === 'nurseryOwner') {
      newUserData.nurseryName = nurseryName;
      newUserData.ownerName = ownerName;
      newUserData.nurseryAddress = nurseryAddress;
    }

     // controllers/userController.js

exports.signUp = (req, res) => {
  res.status(201).json({ message: "User signed up successfully!" });
};





    // Create a new user and save to DB
    const newUser = new User(newUserData);
    await newUser.save();

    // Send response with user data (excluding password)
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        name: newUser.name,
        phoneNumber: newUser.phoneNumber,
        role: newUser.role,
        ...(role === 'farmer' && {
          farmerArea: newUser.farmerArea,
          farmerAddress: newUser.farmerAddress
        }),
        ...(role === 'nurseryOwner' && {
          nurseryName: newUser.nurseryName,
          ownerName: newUser.ownerName,
          nurseryAddress: newUser.nurseryAddress
        })
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to sign up' });
  }
};

module.exports = { signUp };



