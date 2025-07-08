import express from 'express';
import mongoose from 'mongoose';    
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();    
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB connected successfully'); 
     })
.catch(err => {
    console.error('MongoDB connection error:', err);
});