import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js'
import {register,login,logout} from '../controllers/auth.js';
import { protect,authorize } from '../middleware/auth.js';
const router = express.Router()

router.route('/login').post(login)
router.route('/register').post(register);
// router.route('/profile').put(protect,updateUserProfile);
// router.route('/profile').get(protect,getUserProfile)
// router.route('/').get(protect,admin,getusers)
// router.route('/:id')
// .delete(protect,admin,deleteUser)
// .get(protect,admin,getUserById)
// .put(protect,admin,updateUserByAdmin)
export default router