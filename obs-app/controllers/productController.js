import { ProductModel } from "../models/local-file-system/productModel.js";

export class ProductController {

    getProducts = async (req, res) => {
        const products = await ProductModel.getAllProducts();

        res.json(products);
    }
}