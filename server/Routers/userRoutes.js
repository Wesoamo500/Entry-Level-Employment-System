import express from 'express'
import {logIn, signUp,getUser, updateProfile} from '../controllers/userControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router()

router.get('/',getUser)
router.post('/signup',signUp)
router.post('/login',logIn)
router.post('/profile',auth, updateProfile)

export default router