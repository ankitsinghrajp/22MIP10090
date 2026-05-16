import express from "express";
import dotenv from "dotenv";
import notificationRoutes from "./src/routes/notificationRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/notifications", notificationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);
});