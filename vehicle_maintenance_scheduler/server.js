import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

//importing routes 
import vehicleRoutes from "./src/routes/vehicleRoutes.js";

app.get("/", (req, res) => {
    res.send("Vehicle Maintenance Scheduler API");
});

app.use("/api/vehicles", vehicleRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});