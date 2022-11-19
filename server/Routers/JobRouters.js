import express from 'express'
import {getJobs,postJobs,deleteJob} from '../controllers/jobControllers.js';

import auth from '../middleware/auth.js';

const router = express.Router()

router.get('/?', getJobs);
router.post('/', postJobs);
router.delete('/:id',deleteJob)




export default router