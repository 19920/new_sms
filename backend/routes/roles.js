import express from 'express';
import advancedfilter from '../middleware/advancedfilter.js'
import { protect,authorize } from '../middleware/auth.js';
import Staff from '../models/Staff.js'
import  {getAllRoles,createRole,updateRole} from "../controllers/roles.js"
import RoleModel from '../models/Role.js';
const router =express.Router({mergeParams:true});

router.route("/")
.get(protect,advancedfilter(RoleModel,''),getAllRoles)
.post(protect,authorize("Admin"),createRole);

export default router