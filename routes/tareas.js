import {express} from 'express'
import {getTareas, addTarea, eliminarTarea} from '../controllers/tareasController.js'

// let express = require('express');
// let tareasController = require('../controllers/tareasController.js')

let router = express.Router();

router.get('/',  tareasController.getTareas)

router.post('/', tareasController.addTarea)

router.delete('/:id', tareasController.eliminarTarea)

// router.put('/:id', tareasController.editarTarea)


export default router;


