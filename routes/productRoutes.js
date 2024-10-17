import express from 'express';
import { brainTreePaymentController, breantreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountComtroller, productFilterController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from '../controllers/productController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import formidable from 'express-formidable';

const router = express.Router()

//routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)

//update product
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController)


//get products
router.get('/get-product', getProductController);

//single product
router.get('/get-product/:slug', getSingleProductController);

//get photo
router.get('/product-photo/:pid', productPhotoController);

//delete product
router.delete('/delete-product/:pid', deleteProductController);

//filter product
router.post('/product-filters', productFilterController);

//product count
router.get('/product-count', productCountComtroller);

//product per page
router.get('/product-list/:page', productListController);

//Search Product
router.get('/search/:keyword', searchProductController);

//Similler Product
router.get('/related-product/:pid/:cid', relatedProductController);

//categories wise product
router.get('/product-category/:slug', productCategoryController);

//payment routes
//token
router.get('/braintree/token', breantreeTokenController);

//payments
router.post('/braintree/payment', requireSignIn, brainTreePaymentController)

export default router;
