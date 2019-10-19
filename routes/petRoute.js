import { Router } from 'express';
const petRoute = Router(); 
import petController from '../controllers/petController';
import PetController from '../controllers/petController';

petRoute.get('/',petController.getPets);
petRoute.post('/',PetController.addPet);
petRoute.put('/:id',PetController.editPet);


export default petRoute;