import dotenv from "dotenv";
import { fetchData } from "../utils/fetchData.js";

dotenv.config();

export const optimizeVehicleSchedule = async () => {

    try {

        const depotsData = await fetchData(
            process.env.DEPOT_API,
            process.env.ACCESS_TOKEN
        );

        const vehiclesData = await fetchData(
            process.env.VEHICLE_API,
            process.env.ACCESS_TOKEN
        );

        return {
            depots: depotsData,
            vehicles: vehiclesData
        };

    } catch (error) {

        throw new Error(error.message);
    }
};