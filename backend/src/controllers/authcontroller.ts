import {Request, Response} from 'express';
import {StudentModel} from '../models/student';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup=async(req:Request, res:Response)=>{
    const {name,email, password}=req.body;

    try{
        const existingStudent = await StudentModel.findOne({ email});
        if(existingStudent){
            return res.status(400).json({
                message:"Email already exists"
            })
        
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newStudent = new StudentModel({
            name, email, password:hashedPassword
        })

        await newStudent.save();
        return res.status(201).json({
            message:"Student registered successfully"
        });
    }catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({
            message:"Internal server error"
        });
    }
}

export const login = async(req: Request, res: Response)=>{
    const {email, password}= req.body;

    try{
        const student = await StudentModel.findOne({email});
        if(!student){
            return res.status(400).json({
                message:"Invalid email or password"
            })
        }
        const validPassword = await bcrypt.compare(password, student.password);
        if(!validPassword){
            return res.status(400).json({
                message:"Invalid email or password"
            });
        }
        const token =jwt.sign({
            id:student._id
        },process.env.JWT_SECRET as string,{
            expiresIn: '1d'
        });

        res.json({
            token,
            student:{
                id: student._id,
                name: student.name,
                email: student.email,
                feesPaid: student.feesPaid
            }
        });
        
    }catch(error){
        console.error("Login error:", error);
        return res.status(500).json({
            message:"Login error"
        });
    }
}
