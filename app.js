const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB (update with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27107/librarydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import routes
const booksRoutes = require('./routes/booksRoutes');

// Routes
app.use('/api/books', booksRoutes);

app.get('/',(req,res)=>{
  res.send("working")
})
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
