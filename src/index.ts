// import express, {Express} from 'express';
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// const app:Express = express();

// app.use(express.json());

// app.get("/", async (req, res) => {
//     const pizza = await prisma.comidas.findMany({
//         include: {
//                 categoria:{
//                     select: {name_categoria: true}
//                 }
//         }
//     });

//     res.json({'sapo':pizza})
// })

// app.listen(4000,() => {
//     console.log("listening on port 4000");
// })

import { ServerConfig } from "./app";

class ListenServer extends ServerConfig{
    _PORT:Number = this.app.get('PORT');

    listen(){
        this.app.listen(this._PORT, ()=>{
            console.log(`Server running to port ${this._PORT}`)
        })
    }
}

new ListenServer().listen()