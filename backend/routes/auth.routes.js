import express from "express";
import {login ,logout, signup} from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);


router.get("/test", (req, res) => {
    res.send("Auth test route is working!");
  });
  

export default router;