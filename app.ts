import express from 'express';
import router from "./src/routes/index";
import "./src/dbs/init.mongodb"; 

const app = express();

app.use("/", router);

export default app;
