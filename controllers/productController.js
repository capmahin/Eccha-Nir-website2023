import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from 'fs';

export const createProductController = async(req,res)=>{
    try {
        const {name,slug,description,price,category,quantity,shipping} = req.fields;
        const {photo} = req.files;
        //validation
        switch(true){
            case !name:
                return res.status(500).send({error:'Name required'})
            
            case !description:
                return res.status(500).send({error:'Description required'})
            case !price:
                return res.status(500).send({error:'Price required'})
            case !category:
                return res.status(500).send({error:'Category required'})
            case !quantity:
                return res.status(500).send({error:'Quantity required'})
                case photo && photo.size > 1000000:
                    return res
                      .status(500)
                      .send({ error: "photo is Required and should be less then 1mb" });
        }
        const products = new productModel({...req.fields, slug:slugify(name)})
        if(photo){
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save();
        res.status(201).send({
            success:true,
            message:'Product Created Successfully',
            products,
        });
    } catch (error) {
        console.log(error)
        res.send(500).send({
            success:false,
            message:'Error in Create Product',
            error,
        })
    }
};

//getProductController

export const getProductController = async(req,res)=>{
    try {
        const products = await productModel.find({}).populate("category").select("-photo").limit(20).sort({createdAt:-1});
        res.status(200).send({
            success:true,
            countTotal:products.length,
            message:'All Products',
            
            products,
           
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in get products',
            error,
        })
    }
};

//getSingleProductController

export const getSingleProductController = async(req,res)=>{
    try {
        const product = await productModel.findOne({slug:req.params.slug}).select("-photo").populate("category");
        res.status(200).send({
            success:true,
            message:'Single product fetched',
            product,

        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in get single products',
            error,
        })
    }
};

//get productPhotoController

export const productPhotoController = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in get photo',
            error,
        })
    }
}