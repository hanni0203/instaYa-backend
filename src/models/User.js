import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs' 

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    tipocc: {
        type: String,
        required: true,
        trim: true
    },
    numeroTipo: {
        type: Number,
        required: true,
        trim: true
    },
    telefono: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    username:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        require: true,
    },
    state:{
        type:Boolean,
        default: false
    }
},{
    timestamps: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, receivedPassword) =>{
    return await bcrypt.compare (password, receivedPassword)
}

export default model('User', userSchema)