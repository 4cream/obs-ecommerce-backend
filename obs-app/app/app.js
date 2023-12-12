import express, {json} from "express";
import {productData} from "../api/api-products.js";

const app = express();
app.use(json());

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.get("/products", (req, res) => {
    const products = productData;
    console.log("products = ", products);
    res.json(products);
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});