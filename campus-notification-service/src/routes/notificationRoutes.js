import express from "express";
import { fetchPriorityNotifications } from "../controllers/notificationController.js";

const router = express.Router();

router.get("/priority", fetchPriorityNotifications);

export default router;