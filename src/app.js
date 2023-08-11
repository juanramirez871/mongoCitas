import "dotenv/config";
import express from "express";
import citasRoute from "./routes/citas.js"
import { limiter } from "./config/rateLimit.js";
const app = express();


app
    .use(express.json())

    .use(limiter)

    .use("/api", citasRoute)

    .listen(3000, () => console.log("server run..."))