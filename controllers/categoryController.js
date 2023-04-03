import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

export const createCategoryController = async (req,res) =>{
    try {
        const {name} = req.body
        if(!name){
            return res.status(401).send({message:'Name is required'})
        }
        const existingCategory = await categoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message:'Category Already Exist'
            })
        }
        const category = await new categoryModel({name, slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message:'new category created',
            category,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in Category'
        })
    }
};

//updateCategoryController
export const updateCategoryController = async(req,res)=>{
    try {
        const {name} = req.body
        const {id} = req.params
        const category = await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true});
        res.status(200).send({
            success:true,
            message:'Category Updated Successfully',
            category,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Updating category',
            error,

        })
    }
};

//categoryController

export const categoryController = async(req,res)=>{
    try {
        const category = await categoryModel.find({})
        res.status(200).send({
           success:true,
           message:'All Category list',
           category,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in get All category',
            error,
        })
    }
}