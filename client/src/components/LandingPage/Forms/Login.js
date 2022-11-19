import React, {useEffect, useState} from 'react'
import './style.css'

import {Avatar, Button, Divider, Grid, TextField, Typography} from '@mui/material'
import {Spacer} from '@nextui-org/react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {blue} from '@mui/material/colors'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import  {GoogleLogin}  from '@react-oauth/google';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux'

import {logIn} from '../../../actions/auth'




const Login = () => {

	const parsejwt = (token) =>{
		let base64Url = token.split('.')[1];
		let base64 = base64Url.replace(/-/g,'+').replace(/_/g,'/')
		let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c){
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
		}).join(''))

		return JSON.parse(jsonPayload)
	}

	const [formData,setFormData] = useState({email:'',password:''})

	const auth = useSelector((state)=>state.auth);
    const{loading,error,success} = auth;

	const navigate = useNavigate()

	const dispatch = useDispatch()

	const handleChange= (e) =>{
		setFormData({...formData,[e.target.name]:e.target.value})
	}

	const handleSubmit=(e)=>{
		e.preventDefault()
		dispatch(logIn(formData))
		setFormData({email:'',password:''})
		
	}
	useEffect(()=>{
		if(success){
			navigate('/jobs')
		}else{
			navigate('/login')
		}
	},[navigate,success])

	const googleSuccess = async (res) =>{
		const info = parsejwt(res.credential)
		const token = res.credential
		
		try {

			dispatch({type:'AUTH' , data:{info,token} })

			navigate('/jobs')
		} catch (error) {
			console.log(error)
		}
	}
	const googleFailure = (error) =>{
		console.log(error.details)
		console.log('unsuccessful')
	}
  return (
		<div>
			<div className='login_form'>
				<div>
					<Avatar sx={{bgcolor:blue[500]}}><LockOutlinedIcon/></Avatar>
					<Spacer y={0.5}/>
					<Typography variant='h'>Log In</Typography>
				</div>
				<form method='post' onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12}>
							<TextField size='small' required type='email' label='Email' onChange={handleChange} name='email' fullWidth/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField size='small' required type='password' label='Password' onChange={handleChange} name='password' fullWidth/>
						</Grid>
					</Grid>
					{
                    	loading ?  <LoadingButton size='small' sx={{ mt: 3, mb: 2 }} loading variant="contained" fullWidth>Submit</LoadingButton> : <Button size='small' type='submit' variant='contained' onSubmit={handleSubmit} fullWidth sx={{ mt: 3, mb: 2 }}>Log In</Button>
                	}
					{
                    	error && <Alert variant="contained" severity="error">Login Failed</Alert>
                	}
				</form>
				<Divider>OR</Divider>
				<div className='alt_logo'>
					<div>
						<GoogleLogin
							// clientId='456038449813-4adb0oq692gjffm2phhn2bd3dg1q2bu5.apps.googleusercontent.com'
							// render={(renderProps)=>(
							// 	<div id='alt-logo' className='google' style={{background:`url(${googleIcon})`,backgroundSize:'cover'}} onClick={renderProps.onClick} disabled={renderProps.disabled}></div>
							// 	)}
							onSuccess={googleSuccess}
							onFailure={googleFailure}
						/>
					</div>
					{/* <div id='alt-logo' className='google' style={{background:`url(${googleIcon})`,backgroundSize:'cover'}} onClick={() => login()}></div> */}
				</div>
			</div>
			<p className='p-added'>Don't have an account? Register <a href='/signup'>Here</a></p>
		</div>
  )
}

export default Login