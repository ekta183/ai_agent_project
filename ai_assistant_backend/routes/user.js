import express from "express";
import { login , signup, logout, updateUser, getUser } from "../controllers/user";
import { authenticate } from "../middlewares/auth";
const router = express.Router();

router.post("/update-user",authenticate,updateUser);
router.get("/get-user",authenticate,getUser);

router.post("/signup", signup);
router.post("/login", login); 
router.post("/logout", logout);


export default router;