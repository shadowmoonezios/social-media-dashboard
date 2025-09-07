const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/social-media-dashboard', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Datenbank verbunden'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Willkommen zum Social Media Dashboard');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});