import dotenv from "dotenv";
import { fetchData } from "../utils/fetchData.js";
import { solveKnapsack } from "../utils/knapsack.js";
import { Log } from "../utils/logger.js";

dotenv.config();

export const optimizeVehicleSchedule = async () => {

    try {

        await Log(
            "backend",
            "info",
            "service",
            "Fetching depots data"
        );

        const depotsData = await fetchData(
            process.env.DEPOT_API,
            process.env.ACCESS_TOKEN
        );

        await Log(
            "backend",
            "info",
            "service",
            "Fetching vehicles data"
        );

        const vehiclesData = await fetchData(
            process.env.VEHICLE_API,
            process.env.ACCESS_TOKEN
        );

        const depots = depotsData.depots;
        const vehicles = vehiclesData.vehicles;

        await Log(
            "backend",
            "info",
            "service",
            "Running knapsack optimization"
        );

        const optimizedResult = depots.map((depot) => {

            const solution = solveKnapsack(
                vehicles,
                depot.MechanicHours
            );

            const totalDuration =
                solution.selectedTasks.reduce(
                    (sum, task) => sum + task.Duration,
                    0
                );

            return {
                depotId: depot.ID,
                mechanicHours: depot.MechanicHours,
                totalImpact: solution.totalImpact,
                totalDuration,
                selectedTasks: solution.selectedTasks
            };
        });

        await Log(
            "backend",
            "info",
            "service",
            "Vehicle scheduling completed successfully"
        );

        return optimizedResult;

    } catch (error) {

        await Log(
            "backend",
            "error",
            "service",
            error.message
        );

        throw new Error(error.message);
    }
};