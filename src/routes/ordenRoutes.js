import { Router } from 'express';
import * as ordenController from '../controllers/ordenController';

//*****************Inicializando router*********************
const router = Router()

// ruta-lista todas las ordenes del usuario
router.get('/', ordenController.list);

// ruta-guarda la nueva orden
router.post('/', ordenController.newOrden );

//ruta-buscar una orden por ID
router.get('/:id', ordenController.findOneOrden);


/* // actualizar
router.put('/edit/:id', ordenController.UpdateOrden) */

//ruta-actualiza orden -delete orden en forma lógica coloca state en true
router.put('/edit/:id', ordenController.UpdateOrden);


export default router;