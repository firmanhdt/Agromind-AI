import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import pengunjungRoutes from './routes/pengunjungRoutes.js';

dotenv.config();

const app = express();
const { PORT, MONGO_URI } = process.env;
app.use(express.json());
app.use(cors());

// Middleware
app.use(bodyParser.json());


// Routes
app.use('/auth', authRoutes);
app.use('/api', pengunjungRoutes);

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/agromindai', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
