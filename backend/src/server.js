import "dotenv/config";
import express from "express";
import dns from "dns";
import { bootstrapServer } from "./bootstrap.js";
import { userRoutes } from "./routes/user.routes.js";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import cors from "cors"

const app = express();
app.use(express.json())

app.use(cors())

app.use("/users", userRoutes());

bootstrapServer(app);
