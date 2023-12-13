import { ProductModel } from "../models/local-file-system/productModel";

export class ProductController {

    getProducts = async (req, res) => {
        const products = await ProductModel.getAllProducts();
    }
}