import { PrismaClient } from "@prisma/client";
import {comidas} from "@prisma/client"
const prisma = new PrismaClient();

interface IComidas {
  id_comidas:number,
  name_food:string,
  description:string,
  price:number,
  id_categoria:number

}

 class ComidasRepo  {

  async allData(): Promise<comidas>{
    const comidas:any = await prisma.comidas.findMany({
      include: {
        categoria: {
          select: {
                name_categoria: true 
            },
        },
      },
    });

    return comidas as Promise<comidas>;
  }

  async oneData(id:number): Promise<comidas | null> {
    const comida:any = await prisma.comidas.findUnique({
      include: {
        categoria: {
          select: {
                name_categoria: true 
            },
        },
      },
      where: {
        id_comidas: id
    }
    })
    return comida as Promise<comidas> || {};
  }

  async createData(data: any): Promise<comidas>{
    const {id_comidas, name_food, description,price, id_categoria }:IComidas = data;
    const comidas:any = await prisma.comidas.create({
        data:{
            id_comidas, 
            name_food, 
            description,
            price, 
            id_categoria
        }
    });
    return comidas as Promise<comidas>;
  }

  async updateData(id:number, newData:IComidas):Promise<comidas> {
    const data:any = await prisma.comidas.update({
      where:{
        id_comidas:id
      },
        data: newData 
      })
      return data as Promise<comidas>;
  }

  async deleted(id: number): Promise<comidas> {
    const data:any = await prisma.comidas.delete({
        where: {
            id_comidas: id
        }
    })

    return data as Promise<comidas>;
}


}
 export default new ComidasRepo