import { PrismaClient } from "@prisma/client";
import {comidas} from "@prisma/client"
const prisma = new PrismaClient();

export class ComidasRepo {
  async allData() {
    const pizza = await prisma.comidas.findMany({
      include: {
        categoria: {
          select: {
                name_categoria: true 
            },
        },
      },
    });

    return pizza;
  }

  async createData(data: any): Promise<comidas>{
    const {id_comidas, name_food, description,price, id_categoria } = data;
     
    const comidas = await prisma.comidas.create({
        data:{
            id_comidas, 
            name_food, 
            description,
            price, 
            id_categoria
        }
    });

    return comidas;
  }


}
