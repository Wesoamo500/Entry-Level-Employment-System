import express from 'express'
import {getInternships,postInternships} from '../controllers/internshipControllers.js';



const router = express.Router()

router.get('/?', getInternships);
router.post('/', postInternships);





export default router