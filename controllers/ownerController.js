import * as  owners from '../dummy/owners';
import Ajv from 'ajv'
const ajv=new Ajv()
import * as ownerSchema from '../schema/owner.json'
import * as pets from '../dummy/allPet.json';

class OwnerController{

//get req for all the owner list

static getAllOwner(req,res){
    return res.status(200).json({
        owners:owners.owners,
        message:"all the owner list"
    });
}
static petsFinder(owner){
        let allPets=[];

        pets.pets.find((pet)=>{
            if(pet.ownerId==owner){
                allPets.push(pet)
            }
        })
    return allPets
}
static getOwnerAndPets(req,res){
    let owner_id=req.params.id
    let owner=owners.owners.find(owner=>owner.id==owner_id)
    if(owner){
            let all_pets=OwnerController.petsFinder(owner_id);
            return res.status(200).json({
                owner,
                pets:all_pets,
                message:"Owner and pet information"
            })
    }
    return res.status(404).json({
        message:"invalid owner id"
    })
}



}

export default OwnerController;