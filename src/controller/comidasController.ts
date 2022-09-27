import  ComidasRepo  from "../repository/ComidasRepo";
import { Request, Response } from "express";
import validates from "../helpers/validates";


 class ComidasController {


    async getOneData(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const oneData:any = await ComidasRepo.oneData(id)

        const validateData:any = validates.validateData(oneData)
        if(validateData == false) return res.status(404).send({message:'The data is not found'})
        return res.send(oneData)
    }



    async getAllData(req:Request, res:Response) {
        const data = await  ComidasRepo.allData()
        res.send(data)
     }


     async updateData (req:Request, res:Response) {

        const id = parseInt(req.params.id);
        const oneData:any = await ComidasRepo.oneData(id)

        const validateData:any = validates.validateData(oneData)
        const updateData = req.body
        if(validateData == false) return res.status(404).send({ message: "No existe ese dato para actualizar"})
        const newData = await ComidasRepo.updateData(id, updateData)
        return res.send(newData)
        
    }

    async deleted(req: Request, res: Response) {

        const id = parseInt(req.params.id);
        const oneData:any = await ComidasRepo.oneData(id)

        const validateData:any = validates.validateData(oneData)
        if(validateData == false) return res.status(404).send({ message: "No existe ese dato para eliminar"})
        const deleteData = await ComidasRepo.deleted(id)
        return res.send(deleteData)
    }

}

export default new ComidasController();