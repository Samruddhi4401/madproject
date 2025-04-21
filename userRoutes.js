const express = require('express');
const usercontroller = require('../controllers/usercontroller'); // <-- This is important!

const router = express.Router();

router.post('/signUp', usercontroller.signUp); // POST request to create a new user

module.exports = router; // Export the routes
 
// const express = require('express');
// const router = express.Router();