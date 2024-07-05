import express from "express";
import realtorSignup, {
  checkUsernameExists,
  realtorSignin,
} from "../controller/realtor.controller.js";

const router = express.Router();

router.post("/signup", realtorSignup);
router.post("/signin", realtorSignin);
router.get("/check-username/:username", checkUsernameExists);

export default router;
