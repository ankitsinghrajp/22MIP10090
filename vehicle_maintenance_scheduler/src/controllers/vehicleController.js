import { optimizeVehicleSchedule } from "../services/vehicleService.js";

export const getOptimizedSchedule = async (req, res) => {

    try {

        const result = await optimizeVehicleSchedule();

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};