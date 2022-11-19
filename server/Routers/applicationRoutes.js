import express from 'express'
import {sendApplication} from '../controllers/applicationControllers.js';

const router = express.Router()

router.post('/',sendApplication);

export default router