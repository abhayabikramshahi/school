// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import noticeRoutes from './routes/noticeRoutes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/notices', noticeRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Badimalika School API is Running 🚀');
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
