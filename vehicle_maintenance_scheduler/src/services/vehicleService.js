import dotenv from "dotenv";
import { fetchData } from "../utils/fetchData.js";
import { solveKnapsack } from "../utils/knapsack.js";

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

        const depots = depotsData.depots;
        const vehicles = vehiclesData.vehicles;

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

        return optimizedResult;

    } catch (error) {

        throw new Error(error.message);
    }
};