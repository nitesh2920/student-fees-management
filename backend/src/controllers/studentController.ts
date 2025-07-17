import {Request, Response} from 'express';
import { StudentModel } from '../models/student';

export const getAllStudents= async(req:Request, res:Response)=>{

    try{
        const students =await StudentModel.find().select('-password');

        return res.json(students);

    }
    catch(error){
        res.status(500).json({
            message:"Error fetching students"
        })
    }
}

export const getProfile = async(req:Request, res:Response)=>{
    try{
        const student = await StudentModel.findById(req.studentId).select('-passweod');
        if(!student){
            return res.status(404).json({
                message:"Student not found"
            });
        }
         res.json(student);
    }catch(error){
        res.status(500).json({
            message:"Error fetching profile"
        });
    }
};

export const updateProfile = async(req:Request, res:Response)=>{
    const {name, email }= req.body;
    try{
        const updatedStudent = await StudentModel.findByIdAndUpdate(
            req.studentId,
            {name,email},
            {new:true}
        ).select('-password');
        res.json(updatedStudent);
    }catch(error){
        res.status(500).json({
            message:"Error updating profile"
        });
    }
};

export const payFees = async (req: Request, res: Response) => {
  try {
    const student = await StudentModel.findByIdAndUpdate(
      req.studentId,
      { feesPaid: true },
      { new: true }
    ).select('-password');
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: 'Error updating fee status' });
  }
};