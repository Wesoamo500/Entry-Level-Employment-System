import express from 'express'
import {logIn, signUp,getIntern, updateProfile} from '../controllers/internControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router()

router.get('/',getIntern)
router.post('/signup',signUp)
router.post('/login',logIn)
router.post('/profile',auth, updateProfile)

export default router