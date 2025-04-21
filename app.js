 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')

// Import routes
const userRoutes = require('./routes/userRoutes');
// const cropRoutes = require('./routes/cropRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/agronursery', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ MongoDB connected');
}).catch((err) => {
    console.error('❌ MongoDB connection error:', err);

});

app.get('/', (req, res) => {
    res.send('Hello, Welcome to Agronursery!');

});

// Use routes
app.use('/api/users', userRoutes);
// app.use('/api/crops', cropRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
