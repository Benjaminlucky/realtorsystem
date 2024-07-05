import express from "express";
import realtorSignup, {
  checkReferredby,
  checkUsernameExists,
  realtorSignin,
} from "../controller/realtor.controller.js";

const router = express.Router();

router.post("/signup", realtorSignup);
router.post("/signin", realtorSignin);
router.get("/check-username/:username", checkUsernameExists);
router.get("/referredby/:username", checkReferredby);

export default router;
