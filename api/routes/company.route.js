import express from "express";
import createCompany, {
  companySignin,
} from "../controller/company.controller.js";

const router = express.Router();

router.post("/", createCompany);
router.post("/signin", companySignin);

export default router;
