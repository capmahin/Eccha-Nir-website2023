import express from 'express'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

import formidable from 'express-formidable';

const router = express.Router();

//routes

//create LatestProduct
router.post('/create-latestproduct', requireSignIn,isAdmin,formidable(), createLatestproductController);
//Update product
router.put('/update-latestproduct/:pid', requireSignIn,isAdmin,formidable(), updateLatestproductController);

//get products
router.get('/get-latestproduct',getLatestproductController);

//single products

router.get('/get-latestproduct/:slug',getSingleLatestproductController);

//get photo
router.get('/latestproduct-photo/:pid',LatestproductPhotoController);

//delete product
router.delete('/delete-latestproduct/:pid',deleteLatestproductController);

// //filter product
// router.post("/product-filters", productFiltersController);

// //product count
// router.get("/product-count", productCountController);

// //product per page
// router.get("/product-list/:page", productListController);

// //search product
// router.get("/search/:keyword", searchProductController);

// //similar product
// router.get("/related-product/:pid/:cid", realtedProductController);

// //category wise product
// router.get("/product-category/:slug", productCategoryController);

export default router;