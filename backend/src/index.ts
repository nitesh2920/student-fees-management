import express, {Request, Response} from 'express';
import mongoose from 'mongoose';

import authRoutes from './routes/authRoutes';
import studentRoutes from './routes/studentRoutes';
const app = express();

import dotenv from 'dotenv';

import cors from "cors";

dotenv.config();

app.use(express.json());
app.use(cors(
  
));
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI as string)
.then(()=>{
    console.log("DB connected ");

})
.catch((err)=>{
    console.error("DB connection error: ", err);
})

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})