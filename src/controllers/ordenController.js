import orden from '../models/Orden';

//muestra todas las ordenes 
export const list = async (req, res) => {
    try {
        const ordenes = await ordenes.find({state: false}).exec();
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

//elimina a una orden de forma lógica, cambiando el state a true
export const deleteOrden = async (req, res) =>{
    const id = req.params.id;
    await orden.findByIdAndUpdate(id, {$set:{state: true}}, {state: false});
    res.json({message: `La Orden con id: ${id} fue eliminada satisfactoriamente!`});
}
