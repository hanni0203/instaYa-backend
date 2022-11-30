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
    // encomienda
    tipoEmcomienda:{
        type: String,
        required: true,
        trim: true
    },   

    cantidadEmcomienda:{
        type: Number,
        required: true,
        trim: true
    },   
    
    largoEmcomienda:{
        type: Number,
        required: true,
        trim: true
    }, 

    anchoEmcomienda:{
        type: Number,
        required: true,
        trim: true
    }, 
    altoEmcomienda:{
        type: Number,
        required: true,
        trim: true
    }, 
    pesoEmcomienda:{
        type: Number,
        required: true,
        trim: true
    }, 
    //receptor 
    nameReceptor:{
        type: String,
        required: true,
        trim: true
    },
    tipoCcReceptor:{
        type: String,
        required: true,
        trim: true
    },
    numeroTipoReceptor: {
        type: Number,
        required: true,
        trim: true
    },
    direccioReceptor: {
        type: String,
        required: true,
        trim: true
    },
    ciudadReceptor:{
        type: String,
        required: true,
        trim: true
    },
    telefonoReceptor: {
        type: Number,
        required: true,
        trim: true
    },
    state:{
        type:Boolean,
        default: false
    }
    
},{
    timestamps: true,
    versionKey: false
});

export default model('Orden', ordenSchema)