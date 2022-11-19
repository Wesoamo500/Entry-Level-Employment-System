import axios from 'axios'
import  * as api from '../api'

export const fetchInternships = () => async (dispatch)=>{
	try {
		const {data} = await axios.get('http://localhost/8000/internships')
		dispatch({type:'GET_INTERNSHIPS',payload:data})
	} catch (error) {
		console.log(error)
	}
}

export const postInternships = (newPost) => async (dispatch)=>{
	
	try {
		const {data} = await axios.get('http://localhost/8000/internships',newPost)
		dispatch({type:'ADD_INTERNSHIPS',payload:data})
	} catch (error) {
		console.log(error)
	}
}

export const searchInternships = (word) => async (dispatch)=>{
	try {
		const {data} = await axios.get(`http://localhost:8000/internships/?program=${word}`)
	
		dispatch({type:'SEARCH_INTERNSHIPS',payload:data})
	} catch (error) {
		console.log(error)
	}
}


