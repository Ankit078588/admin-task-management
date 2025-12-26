import express from "express";
import { createTask, getAllTasks } from "../controllers/task.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { allowRoles } from "../middlewares/role.middleware.js";

const router = express.Router();


router.post( "/", authMiddleware, allowRoles("admin", "manager"), createTask );
router.get( "/", authMiddleware,  allowRoles("super-admin", "admin", "manager", "user"), getAllTasks );


export default router;
