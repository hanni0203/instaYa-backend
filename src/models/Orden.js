import { Schema, model } from "mongoose";

const ordenSchema = new Schema({
    // emisor 
    userName:{
        type: String,
        required: true,
        trim: true
    },
    
    nameEmisor:{
        type: String,
        required: true,
        trim: true
    },
    tipoCcEmisor:{
        type: String,
        required: true,
        trim: true
    },
    numeroTipoEmisor: {
        type: Number,
        required: true,
        trim: true
    },
    direccionEmisor: {
        type: String,
        required: true,
        trim: true
    },
    ciudadEmisor:{
        type: String,
        required: true,
        trim: true
    },
    telefonoEmisor: {
        type: Number,
        required: true,
        trim: true
    },

    fechaEmisor: {
        type: Date,
        

    },
    horaEmisor: {
        type: String,
        required: true,
        trim: true
    },

    
},{
    timestamps: true,
    versionKey: false
});

export default model('Orden', ordenSchema)