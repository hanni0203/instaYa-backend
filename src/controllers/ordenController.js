import orden from '../models/Orden';

//Muestra las ordenes de un usuario
// http:localhost:3001/orden?userId=12345
export const list = async (req, res) => {
    try {
        const ordenes = await orden.find({state: false, userId: req.query.userId} ).exec();
        res.status(200).json({
            meta:{
                status:200,
                total: ordenes.length,
                url:"/orden"
            },
            data: ordenes
        });
    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message
        })
    }
}

// Guarda una nueva orden 
export const newOrden = async (req, res) => {
    /* res.json(req.body); */
    
    const newOrden = new orden ({
       //datos emisor
        userName: req.body.userName,
        nameEmisor: req.body.nameEmisor,
        tipoCcEmisor: req.body.tipoCcEmisor,
        numeroTipoEmisor: req.body.numeroTipoEmisor,
        direccionEmisor: req.body.direccionEmisor,
        ciudadEmisor: req.body.ciudadEmisor,
        telefonoEmisor: req.body.telefonoEmisor,
        /* fechaEmisor: req.body.fechaEmisor, */
        horaEmisor: req.body.horaEmisor,
        // datos paquete 
        tipoEmcomienda: req.body.tipoEmcomienda,
        cantidadEmcomienda: req.body.cantidadEmcomienda,
        largoEmcomienda: req.body.largoEmcomienda,
        anchoEmcomienda: req.body.anchoEmcomienda,
        altoEmcomienda: req.body.altoEmcomienda,
        pesoEmcomienda: req.body.pesoEmcomienda,
        //datos receptor 
        nameReceptor: req.body.nameReceptor,
        tipoCcReceptor: req.body.tipoCcReceptor,
        numeroTipoReceptor: req.body.numeroTipoReceptor,
        direccioReceptor: req.body.direccioReceptor,
        ciudadReceptor: req.body.ciudadReceptor,
        telefonoReceptor: req.body.telefonoReceptor,  
        userId: req.body.userId
    
    });
    await newOrden.save();
    console.log(newOrden);
    res.send('Orden Guardada');
}

//busca una orden por el ID
export const findOneOrden = async (req, res)=>{
    const id = req.params.id
    try {
        const Orden= await orden.findById(id).where({state: false}).exec();
        res.status(200).json({
            meta:{
                status:200,
                total: Orden.length,
                url:"/orden"
            },
            data: Orden
        });
    }catch (error) {
        res.status(error.status || 500).json({
            message: error.message
        })
    }
} 


/* //localhost:5000/orden/edit/2
export const UpdateOrden = async (req, res)=>{
    orden.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log('Orden updated successfully !')
            res.json(data)
        }
    })
} */

//elimina a una orden de forma lógica, cambiando el state a true
export const UpdateOrden = async (req, res) =>{
    const id = req.params.id;
    await orden.findByIdAndUpdate(id, {
        $set: {estado:"Cancelado", state:true}
    });
    res.json({message: `La Orden con id: ${id} fue eliminada satisfactoriamente!`});

}
