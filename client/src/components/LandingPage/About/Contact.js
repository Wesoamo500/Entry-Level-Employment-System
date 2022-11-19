import {Button, TextField, Typography} from '@mui/material'
import React,{useState} from 'react'
import './About.css'
import { useDispatch } from 'react-redux'
import {sendEmail} from '../../../actions/jobs'


const Contact = () => {
	const dispatch = useDispatch();

	const [messages,setMessages] = useState({
		username:'',email:'',message:''
	})
	const handleSubmit = (e) =>{
		e.preventDefault()
		dispatch(sendEmail(messages))
		setMessages({username:'',email:'',message:''})
	}
  return (
	<div className='contact' onClick={handleSubmit} id='contact'>
		<Typography variant='h5'>Contact Us</Typography>
		<form method='post' className='form'>
			<TextField type='text' name='username' value={messages.username} onChange={(e)=>setMessages({...messages,username:e.target.value})} label='Username' fullWidth/>
			<TextField type='email' name='email' value={messages.email} onChange={(e)=>setMessages({...messages,email:e.target.value})} label='Email' fullWidth/>
			<TextField minRows={5} multiline type='text' value={messages.message} onChange={(e)=>setMessages({...messages,message:e.target.value})} name='message' label='Message' fullWidth/>
			<Button variant='contained'>Send</Button>
		</form>
	</div>
  )
}

export default Contact