import mongoose, {Schema,model} from 'mongoose';

const studentSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
        },
        password:{
            type:String,
            required:true
        },
        feesPaid:{
            type: Boolean, 
            default:false
        }


});

export  const  StudentModel = model("Student",studentSchema);
