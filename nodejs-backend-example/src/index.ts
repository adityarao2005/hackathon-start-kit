import express, { Application } from "express";

const PORT = process.env.PORT || 4000;

const app: Application = express();

app.get("/ping", async (_req, res) => {
    res.send({
        message: "pong 2",
    });
});

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});