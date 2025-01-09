// src/index.js
import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("My Express + TypeScript Server");
});

app.listen(80, '0.0.0.0', () => {
    console.log("Server running on port 80");
});

setInterval(() => {
    console.log("Hello World");
}, 2000)