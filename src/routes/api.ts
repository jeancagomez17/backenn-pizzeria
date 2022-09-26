import { Router } from "express";
import routerComida from './api/comidas'
import routerCategory from './api/category'
import routerOrden from './api/orden'
import routerDelivery from './api/delivery'
import routerPedidos from './api/pedidos'

const routerApi:Router = Router();


routerApi.use('/comidas', routerComida)
routerApi.use('/category', routerCategory)
routerApi.use('/delivery', routerDelivery)
routerApi.use('/orden', routerOrden)
routerApi.use('/pedidos', routerPedidos)


export default routerApi