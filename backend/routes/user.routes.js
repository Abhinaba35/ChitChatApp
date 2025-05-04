import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsrsForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/",protectRoute,getUsrsForSidebar)

export default router;