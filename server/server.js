import express from "express";
import {PORT} from './config.js'

import IndexRoutes from './routes/index.routes.js';

const app = express();

app.use(IndexRoutes);

app.listen(PORT);
console.log("server listen on port 4000");