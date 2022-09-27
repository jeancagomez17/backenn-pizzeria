import { response, Response } from "express"



class Validates{

    validateData(data:string){
        const isEmpty =  Object.keys(data).length === 0
        if(isEmpty) return { message: "The data was not found"}
        return data
    }


}

export default new Validates()