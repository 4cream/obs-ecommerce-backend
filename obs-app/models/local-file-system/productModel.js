import {productData} from "../api/api-products.js";

export class ProductModel {

    getAllProducts = async (req, res) => {
        const products = productData;
        res.json(products);
    }
}