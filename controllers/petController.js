import * as pets from '../dummy/allPet.json';
import Ajv from 'ajv'
const ajv=new Ajv()
import path from 'path';
let jsonPath='../dummy/allPet.json'
import * as petSchema from '../schema/pet.json'
import fs from 'fs'


class PetController{

    static  getPets(req,res){
        return  res.status(200).json({
            pets:pets.pets,
            message:"all the pets"
        })
    }

   static  updateJsonFile(newData){
        fs.writeFile(path.join(__dirname,jsonPath), JSON.stringify(newData), function (err) {
            if (err) { 
                console.log(err);
                return false;
            }
                  
                return true;
        
              });
    }
 

    static async addPet(req,res){
        
        if(!ajv.validate(petSchema, req.body)){
           
            return res.status(400).json({
               error: ajv.errors,
               message:"Not valid data"
            })
        }
        let newData=req.body;
       
        newData['id']=Math.floor(Math.random() * (100 - 1)) + 1;
        let newFileData=pets.pets;
   
        newFileData.push(newData)
        let new_data={
            pets:newFileData
        }
      
          await  fs.writeFile(path.join(__dirname,jsonPath), JSON.stringify(new_data), function (err) {
                if (err) { console.log(err);
                    return res.status(400).json({
                        message:"file write failed",
                        err
                    })}
                    return res.status(201).json({
                        message:"new pet added successfully"
                    })
            
                  });
            
          }
       
static async editPet(req,res){
    if(!ajv.validate(petSchema, req.body)){
        
        return res.status(400).json({
           error: ajv.errors,
           message:"Not valid data"
        })
    }
    let pet_id=req.params.id;

   
    let _checkPet=pets.pets.findIndex(pet=>pet.id==pet_id)
    if(_checkPet>=0){
    
        let prevData=pets;
        prevData.pets[_checkPet]=req.body;
        prevData.pets[_checkPet]["id"]=pet_id
    await  PetController.updateJsonFile(prevData)
  
        return res.status(201).json({
            message:"pet information edited successfully"
        })

    }
    else{
        return res.status(404).json({
            message:"invalid pet id provided"
        })
    }
}
   
}

export default PetController;