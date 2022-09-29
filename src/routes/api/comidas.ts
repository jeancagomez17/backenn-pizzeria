import { Router, Request, Response } from "express";
import  ComidasRepo  from "../../repository/ComidasRepo";
import  ComidasController  from "../../controller/comidasController";
// import comidasController from "../../controller/comidasController";

const router:Router = Router();

router
.get('/', ComidasController.getAllData)
.get('/:id', ComidasController.getOneData)
.post('/', ComidasController.addData)
.put('/:id', ComidasController.updateData)
.delete('/:id', ComidasController.deleted)


export default router