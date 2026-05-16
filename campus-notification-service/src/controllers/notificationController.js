import { getPriorityNotifications } from "../services/notificationService.js";

export const fetchPriorityNotifications = async (req, res) => {

    try {

        const notifications = await getPriorityNotifications();

        res.status(200).json({
            success: true,
            total: notifications.length,
            data: notifications
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};