import express, {json} from "express";

const app = express();
// app.use(json());

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});