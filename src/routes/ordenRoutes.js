import { Router } from 'express';
import * as ordenController from '../controllers/ordenController';

//*****************Inicializando router*********************
const router = Router()

// ruta-lista todas las ordenes 
router.get('/', ordenController.list);

// ruta-guarda guarda la nueva orden
router.post('/', ordenController.newOrden );

//ruta-buscar una orden por ID
router.get('/:id', ordenController.findOneOrden);

//ruta-delete orden en forma lógica coloca state en true
router.put('/:id', ordenController.deleteOrden);


export default router;