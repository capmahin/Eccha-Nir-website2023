import express from 'express'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController } from "../controllers/productController.js";
import formidable from 'express-formidable';

const router = express.Router();

//routes

//create product
router.post('/create-product', requireSignIn,isAdmin,formidable(), createProductController);

//get products
router.get('/get-product',getProductController)



export default router;