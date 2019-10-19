import { Router } from 'express';
const ownerRoutes = Router(); 
import OwnerController from '../controllers/ownerController';


ownerRoutes.get('/',OwnerController.getAllOwner)
ownerRoutes.get('/:id',OwnerController.getOwnerAndPets)



export default ownerRoutes