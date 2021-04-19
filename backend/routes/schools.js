


import express from 'express';
import advancedfilter from '../middleware/advancedfilter.js'
import { protect,authorize } from '../middleware/auth.js';
import School from '../models/School.js'
import  {getAllSchools,getSchool,createSchool,updateSchool,removeSchool,
} from "../controllers/schools.js"
const router =express.Router({mergeParams:true});


// router.route("/radius/:zipcode/:distance")
// .get(getSchoolsInRadius)

router.route("/")
.get(protect,advancedfilter(School,''),getAllSchools)
.post(protect,authorize("SuperUser"),createSchool);

// router.route("/:id/photo")
// .put(protect,authorize("SuperUser",),SchoolUploadPhote)


router.route("/:id")
.delete(protect,authorize("SuperUser","Admin"),removeSchool)
.get(getSchool)
.put(protect,authorize("SuperUser","Admin"),updateSchool) 

export default router