import dotenv from "dotenv";
import { fetchData } from "../utils/fetchData.js";
import { logger } from "../utils/logger.js";

dotenv.config();

export const getPriorityNotifications = async () => {

    try {

        logger("Fetching notifications from API");

        const response = await fetchData(
            process.env.NOTIFICATION_API,
            process.env.ACCESS_TOKEN
        );

        const notifications = response.notifications;

        logger(`Total notifications fetched: ${notifications.length}`);

        const priorityMap = {
            Placement: 3,
            Result: 2,
            Event: 1
        };

        const scoredNotifications = notifications.map((notification) => {

            return {
                ...notification,
                priorityScore: priorityMap[notification.Type] || 0,
                timestampValue: new Date(notification.Timestamp).getTime()
            };
        });

        scoredNotifications.sort((a, b) => {

            if (b.priorityScore !== a.priorityScore) {

                return b.priorityScore - a.priorityScore;
            }

            return b.timestampValue - a.timestampValue;
        });

        const topNotifications = scoredNotifications.slice(0, 10);

        logger("Top 10 notifications generated");

        return topNotifications;

    } catch (error) {

        logger(`Error: ${error.message}`);

        throw new Error(error.message);
    }
};