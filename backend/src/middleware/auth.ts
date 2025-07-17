import {Request, Response , NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware=(req: Request, res: Response, next: NextFunction) =>{


    try{
        const token = req.headers.token;
        console.log(token)
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        const decoded= jwt.verify(token as string ,process.env.JWT_SECRET as string);
        if(typeof decoded === 'object' && decoded !=null && 'id' in decoded)
        {
            req.studentId=decoded.id;
            next();
        }else{
            return res.status(401).json({ message: "Invalid token" });
        }

    }catch (error) {
        console.error("Authentication error:", error);
        return res.status(401).json({ message: "unauthorized" });
    }
}