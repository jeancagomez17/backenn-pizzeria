import  ComidasRepo  from "../repository/ComidasRepo";
import { Request, Response } from "express";
import validates from "../helpers/validates";


 class ComidasController {

    async getOneData(req: Request, res: Response){
        const id = parseInt(req.params.id)
        const oneData:any = await ComidasRepo.oneData(id)

        const validateData = validates.validateData(oneData)
        // const isEmpty =  Object.keys(oneData).length === 0
        // if(isEmpty) return res.status(404).send({ message: "The data is not found"})
        return res.send(validateData)
    }
    async getAllData(req:Request, res:Response) {
        const data = await  ComidasRepo.allData()
        res.send(data)
     }

     async updateData (req:Request, res:Response) {
        const id = parseInt(req.params.id);
        const oneData:any = await ComidasRepo.oneData(id)
        const isEmpty =  Object.keys(oneData).length === 0
        const updateData = req.body
        
        if(isEmpty) return res.status(404).send({ message: "No existe ese dato para actualizar"})

        const newData = await ComidasRepo.updateData(id, updateData)
        return res.send(newData)
        
    }

}

export default new ComidasController();