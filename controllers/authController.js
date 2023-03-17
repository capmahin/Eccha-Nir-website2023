 import userModel from "../models/userModel.js"
 
 
 export const registerController = async(req,res) =>{
    try {
        const {name,email,password,phone,address} = req.body
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in Registeration',
        })
    }
}

