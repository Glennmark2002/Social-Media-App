import express from 'express'; 
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';

const app = express(); 
dotenv.config();
// app.use(cors()); // app.use(cors({origin : ['https://social-media-app-glennmark.vercel.app']}));
app.use(express.json())

app.listen(3000, () => console.log('Running at port 3000'));
mongoose.connect(process.env.MONGO);

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

