import { Router, Request, Response } from "express";
import { ComidasRepo } from "../../repository/ComidasRepo";

const router:Router = Router();

router
.get('/', async (req:Request, res:Response)=>{
   const dato = await new ComidasRepo().allData()
    res.send(dato)
})
.post('/', async (req:Request, res:Response)=>{
    const dato = await new ComidasRepo().createData(req.body)
     res.send(dato)
 })

export default router