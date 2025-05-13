import express from "express";
import Router from "./src/routes/index.js";
const app = express();

app.use("", Router)

export default app;