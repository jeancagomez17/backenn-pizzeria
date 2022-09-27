import { response, Response } from "express"



class Validates{

    validateData(data:string){
        const isEmpty =  Object.keys(data).length === 0
        if(isEmpty) return false
        return true 
    }


}

export default new Validates()