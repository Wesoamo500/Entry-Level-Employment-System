import  * as api from '../api'

export const fetchJobs = () => async (dispatch)=>{
	try {
		const {data} = await api.getJobs()
		dispatch({type:'GET',payload:data})
	} catch (error) {
		console.log(error)
	}
}

export const postJobs = (newPost) => async (dispatch)=>{
	
	try {
		const {data} = await api.postJobs(newPost)
		dispatch({type:'ADD',payload:data})
	} catch (error) {
		console.log(error)
	}
}

export const searchJobs = (word) => async (dispatch)=>{
	try {
		const {data} = await api.searchJobs(word)
	
		dispatch({type:'SEARCH',payload:data})
	} catch (error) {
		console.log(error)
	}
}

export const deleteJob = (id) => async (dispatch)=>{

	try {
		await api.deleteJob(id)
		dispatch({type:'DELETE',payload:id})
	} catch (error) {
		console.log(error)
	}
}

export const sendEmail = (newMail)=> async (dispatch)=>{
	try {
		const{data} = await api.sendEmail(newMail)
		dispatch({type:'SEND',payload:data})
	} catch (error) {
		console.log(error)
	}
}
