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




import axios from "axios";
import https from "https";

app.get("/test", async (req, res) => {

    try {

        const response = await axios.get(
            process.env.DEPOT_API,
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                },

                httpsAgent: new https.Agent({
                    rejectUnauthorized: false
                })
            }
        );

        res.json(response.data);

    } catch (error) {

        console.log(error.response?.data);

        res.json({
            error: error.response?.data || error.message
        });
    }
});





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});