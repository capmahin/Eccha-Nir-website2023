 export const registerController = async(req,res) =>{
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in Registeration',
        })
    }
}

