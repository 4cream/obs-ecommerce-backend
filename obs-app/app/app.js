import express, {json} from "express";
import {createProductRouter} from "../routes/productRoutes.js";
import {corsMiddleware} from "../middlewares/cors.js";

const app = express();
// app.use(json());
app.use(corsMiddleware());

app.use('/', createProductRouter());

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});