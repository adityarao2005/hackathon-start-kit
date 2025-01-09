"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.js
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("My Express + TypeScript Server");
});
app.listen(80, '0.0.0.0', () => {
    console.log("Server running on port 80");
});
setInterval(() => {
    console.log("Hello World");
}, 2000);
