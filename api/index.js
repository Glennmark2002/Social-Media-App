import express from 'express'; 
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import postRoutes from './routes/post.route.js';

const app = express(); 
dotenv.config();
app.use(cors({ origin: '*' })); // app.use(cors({origin : ['https://social-media-app-glennmark.vercel.app']}));
app.use(express.json())

app.listen(3000, () => console.log('Running at port 3000'));
mongoose.connect(process.env.MONGO);

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; 
  const message = err.message || 'Internal Server Error'; 
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode 
  })
})

