import express from 'express'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from 'express-formidable';

const router = express.Router();
//create order
router.post('/create-order', requireSignIn,formidable(), createOrderController);
// //Update product
// router.put('/update-product/:pid', requireSignIn,isAdmin,formidable(), updateProductController);

//get orders
router.get('/get-order',getOrderController);

//single orders

router.get('/get-orders/:slug',getSingleOrderController);
export default router;