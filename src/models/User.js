import { Schema, model } from "mongoose";

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

export default model('User', userSchema)