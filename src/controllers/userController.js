import user from '../models/User';

//muestra todos los usuarios
export const list = async (req, res) => {
    try {
        const users = await user.find({state: false}).exec();
        res.status(200).json({
            meta:{
                status:200,
                total: users.length,
                url:"/user"
            },
            data: users
        });
    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message
        })
    }
}

// Guarda un nuevo usuario
export const newUser = async (req, res) => {
    /* res.json(req.body); */
    const newUser = new user ({
        name: req.body.name,
        tipocc: req.body.tipocc,
        numeroTipo: req.body.numeroTipo,
        telefono: req.body.telefono,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });
    await newUser.save();
    console.log(newUser);
    res.send('Usuario guardado');
}

//busca un usuario por el ID
export const findOneUser = async (req, res)=>{
    const id = req.params.id
    try {
        const User = await user.findById(id).where({state: false}).exec();
        res.status(200).json({
            meta:{
                status:200,
                total: User.length,
                url:"/user"
            },
            data: User
        });
    }catch (error) {
        res.status(error.status || 500).json({
            message: error.message
        })
    }
} 

//elimina a un usuario en forma lógica, cambiando el state a true
export const deleteUser = async (req, res) =>{
    const id = req.params.id;
    await user.findByIdAndUpdate(id, {$set:{state: true}}, {state: false});
    res.json({message: `El usuario con id: ${id} fue eliminado satisfactoriamente!`});
}


