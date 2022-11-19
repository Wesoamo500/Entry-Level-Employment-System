import { combineReducers } from "redux";

import jobs from './jobs'
import internships from "./internships";
import {auth,userUpdate,applications} from './auth'

export default combineReducers({
	jobs,
	auth,
	userUpdate,
	applications,
	internships
})