import axios from 'axios';
import * as api from '../api'
import {store} from '../index'

export const signUp = (formData)=>async(dispatch)=>{
	try {
		dispatch({type:'AUTH_REQUEST'})
		const {data} = await axios.post('http://localhost:8000/intern/signup',formData);

		dispatch({type:'AUTH',payload:data})
		localStorage.setItem('profile',JSON.stringify(data))

		
	} catch (error) {
		dispatch({
			type:'AUTH_FAIL',
			payload:
				error.response && error.response.data.message
					?error.message.data.message
					:error.message,
		})
	}
}


export const logIn = (formData)=>async(dispatch)=>{
	try {
		dispatch({type:'AUTH_REQUEST'})

		const {data} = await axios.post('http://localhost:8000/intern/login',formData);

		dispatch({type:'AUTH',payload:data})

		localStorage.setItem('profile',JSON.stringify(data))
	} catch (error) {
		dispatch({
			type:'AUTH_FAIL',
			payload:
				error.response && error.response.data.message
					?error.message.data.message
					:error.message,
		})
	}
}

export const updateProfile = (user) => async(dispatch)=>{
	try {
		dispatch({type:'USER_UPDATE_REQUEST'})

		const {auth:{authData}} = store.getState()
		
		const token = authData.token;
		const AuthStr = 'Bearer '.concat(token)

		

		const {data} = await axios.post('http://localhost:8000/user/profile',user,{headers:{Authorization:AuthStr}},{cookie:{sameSite:'none',secure:true}});
		dispatch({type:'USER_UPDATE_SUCCESS',payload:data})
		dispatch({type:'AUTH',payload:data})
		localStorage.setItem('profile',JSON.stringify(data))
	} catch (error) {
		dispatch({
			type:'USER_UPDATE_FAIL',
			payload:
				error.response && error.response.data.message
					?error.message.data.message
					:error.message,
		})
	}
}