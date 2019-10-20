import { Router } from 'express';
const ownerRoutes = Router(); 
import OwnerController from '../controllers/ownerController';


ownerRoutes.get('/',OwnerController.getAllOwner)
ownerRoutes.get('/:id',OwnerController.getOwnerAndPets)
ownerRoutes.get("*",(req,res)=>{
    res.status(404).json({message:"invalid api endpoint"})
})



export default ownerRoutes