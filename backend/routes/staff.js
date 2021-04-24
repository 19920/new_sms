import express from 'express';
import advancedfilter from '../middleware/advancedfilter.js'
import { protect,authorize } from '../middleware/auth.js';
import Staff from '../models/Staff.js'
import  {getAllSchoolStaff,createStaff} from "../controllers/staff.js"
const router =express.Router({mergeParams:true});

router.route("/")
.get(protect,advancedfilter(Staff,''),getAllSchoolStaff)
.post(protect,authorize("Admin"),createStaff);

export default router