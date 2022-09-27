import { Router, Request, Response } from "express";
import  ComidasRepo  from "../../repository/ComidasRepo";
import  ComidasController  from "../../controller/comidasController";
// import comidasController from "../../controller/comidasController";

const router:Router = Router();

router
.get('/', ComidasController.getAllData)
.get('/:id', ComidasController.getOneData)

.put('/:id', ComidasController.updateData)
//async (req:Request, res:Response) =>{
    // const id = parseInt(req.params.id);
    // const updateData = req.body
    // const newData = await ComidasRepo.updateData(id, updateData)
    // res.send(newData)
// })

.delete('/:id', ComidasController.deleted)

.post('/', async (req:Request, res:Response)=>{
    const dato = await ComidasRepo.createData(req.body)
     res.send(dato)
 })

export default router