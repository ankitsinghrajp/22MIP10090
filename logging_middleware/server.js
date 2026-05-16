import express from "express";
import {Log} from "./src/services/logger.js"

const app = express();

app.get("/", async (req, res) => {

    await Log(
        "backend",
        "info",
        "route",
        "Root route accessed"
    );

    res.send("Logging middleware working");
});

app.listen(process.env.PORT, () => {
    console.log("The server is running at: ",process.env.PORT);
});