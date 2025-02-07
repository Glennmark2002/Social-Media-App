import express from 'express'; 
import User from './models/user.model.js';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express(); 
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://Glennmark:Glennmark09@socialmediaapp.su1ai.mongodb.net/User?retryWrites=true&w=majority&appName=SocialMediaApp')
.then(() => console.log('Connected'))
.catch((err) => console.log(err))


app.get("/", (req, res) => {
    res.json("Hello");
}); 

app.post('/api', async (req, res) => {

    const { username, email } = req.body;
    const newUser = new User({username, email});

    await newUser.save(); 
    res.status(201).json({ message: 'User created successfully' });

})

app.listen(3000, () => console.log('Running at port 3000'));