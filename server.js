const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/social_media_dashboard';

mongoose.connect(MONGODB_URI, { useNewURLParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1); // Exit process with failure
  });

app.get('/', (req, res) => {
  res.send('Welcome to the social media dashboard application');
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});