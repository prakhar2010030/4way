import express from "express";
import { login, signUp } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup",signUp); // for signing user

router.post("/login", login); // for login user

export default router;
