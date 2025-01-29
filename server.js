import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import directoryRoutes from './routes/directoryRoutes.js';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 5000;
// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/directories', directoryRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});