import { Router } from 'express';
import * as userController from '../controllers/userController';

//*****************Inicializando router*********************
const router = Router()

// ruta-lista todos los usuarios
router.get('/', userController.list);

// ruta-guarda unnuevo usuario
router.post('/', userController.newUser );

//ruta-buscar un usuario por ID
router.get('/:id', userController.findOneUser);

//ruta-delete user en forma lógica coloca state en true
router.put('/:id', userController.deleteUser);


export default router;
