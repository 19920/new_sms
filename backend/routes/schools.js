


import express from 'express';
import advancedfilter from '../middleware/advancedfilter.js'
import { protect,authorize } from '../middleware/auth.js';
import School from '../models/School.js'
import  {getAllSchools,getSchool,createSchool,updateSchool,removeSchool,
    assignUserToSchool,getallSchoolUsers,addClassToSchool,getallSchoolClasses,
    addSectionToSchool,getallSchoolSections,addSubjectSchool,getallSchoolSubjects,getallSchoolTeachers
} from "../controllers/schools.js"
const router =express.Router({mergeParams:true});


// router.route("/radius/:zipcode/:distance")
// .get(getSchoolsInRadius)

router.route("/")
.get(protect,advancedfilter(School,''),getAllSchools)
.post(protect,authorize("SuperUser"),createSchool);

// router.route("/:id/photo")
// .put(protect,authorize("SuperUser",),SchoolUploadPhote)

router.route("/:id/assign-user").post(protect,authorize("SuperUser","Admin"),assignUserToSchool)
router.route("/add-class").post(protect,authorize("Admin"),addClassToSchool)
router.route("/add-section").post(protect,authorize("Admin"),addSectionToSchool)
router.route("/add-subject").post(protect,authorize("Admin"),addSubjectSchool)
router.route("/:id/users").get(protect,authorize("SuperUser","Admin"),getallSchoolUsers)
router.route("/:id/teachers").get(protect,authorize("SuperUser","Admin"),getallSchoolTeachers)
router.route("/:id/classes").get(protect,authorize("SuperUser","Admin"),getallSchoolClasses)
router.route("/:id/sections").get(protect,authorize("SuperUser","Admin"),getallSchoolSections)
router.route("/:id/subjects").get(protect,authorize("SuperUser","Admin","Teacher"),getallSchoolSubjects)
router.route("/:id")
.delete(protect,authorize("SuperUser","Admin"),removeSchool)
.get(getSchool)
.put(protect,authorize("SuperUser","Admin"),updateSchool) 

export default router