import {productData} from "../../api/api-products.js";

export class ProductModel {

    static getAllProducts = async () => {
        const products = productData;
        return products;
    }
}