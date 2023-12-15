import { Router } from "express";
import { ProductController } from "../controllers/productController.js";


export const createProductRouter = () => {
    const productRouter = Router();

    const productController = new ProductController();
    
    productRouter.get("/products", productController.getProducts);

    return productRouter;
};

