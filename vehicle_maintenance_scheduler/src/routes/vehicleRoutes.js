import express from "express";
import { getOptimizedSchedule } from "../controllers/vehicleController.js";

const router = express.Router();

router.get("/schedule", getOptimizedSchedule);

export default router;