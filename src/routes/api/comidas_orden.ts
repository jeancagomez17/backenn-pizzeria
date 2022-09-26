import { Router, Request, Response } from "express";
import { ComidasRepo } from "../../repository/ComidasRepo";

const router:Router = Router();

router
.get('/', (req:Request, res:Response)=>{
    res.send('Ordenes')
})


export default router