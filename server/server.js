import express from "express";
import {PORT} from './config.js'

import IndexRoutes from './routes/index.routes.js';
import userRoutes from './routes/user.routes.js';
const app = express();

app.use(express.json());

app.use(IndexRoutes);
app.use(userRoutes);

app.listen(PORT);
console.log("server listen on port 4000");