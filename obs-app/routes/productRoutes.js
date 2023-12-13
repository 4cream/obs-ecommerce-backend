import { Router } from "express";
import { ProductController } from "../controllers/productController";


export const createProductRouter = () => {
    const productRouter = Router();
    
    productRouter.get("/products", ProductController.getProducts);

    return productRouter;
};

