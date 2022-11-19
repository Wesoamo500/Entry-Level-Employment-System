import React, {useState,useEffect} from 'react'
import '../Forms/style.css'

import {Avatar, Button, Divider, Grid, TextField, Typography} from '@mui/material'
import {Spacer} from '@nextui-org/react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {blue} from '@mui/material/colors'
import Filebase from 'react-file-base64'

import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {signUp} from '../../../actions/internAuth'

import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux'



const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [formData,setFormData] = useState({firstname:'',surname:'',email:'',password:'',location:'',pic:'',school:''})

	const handleSubmit = (e)=>{
		e.preventDefault()
		dispatch(signUp(formData))
		setFormData({firstname:'',surname:'',email:'',password:'',location:'',pic:'',school:''})	
	}
	
	const handleChange = (e) =>{
		setFormData({...formData,[e.target.name]:e.target.value})
	}
	const handleChanger = (e)=>{
		setFormData({...formData,[e.target.name]:e.target.value.slice(0,10)})
	}

	const auth = useSelector((state)=>state.auth);
    const{loading,error,success} = auth;

	useEffect(()=>{
		if(success){
			navigate('/internships')
		}else{
			navigate('/internRegister')
		}
	},[navigate,success])

	const [change,setChange] = useState(false)
	const changeSub = ()=>{
		setChange(!change)
	}
  return (
		<div className='register_form'>
			<div>
				<Avatar sx={{bgcolor:blue[500]}}><LockOutlinedIcon/></Avatar>
				<Spacer y={0.5}/>
				<Typography variant='h5'>Sign Up</Typography>
			</div>
			<form className='regis-form' method='post' onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Filebase
						type='file'
						multiple={false}
						onDone={({base64})=>{setFormData({...formData, pic:base64})}}
						/>
					<Grid item xs={12} sm={6}>
						<TextField required size='small' type='text' label='First Name' name='firstname' onChange={handleChange} fullWidth/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField required size='small' type='text' label='Surname' name='surname' onChange={handleChange} fullWidth/>
					</Grid>
					<Grid item xs={12}>
						<TextField required size='small' type='email' label='Email' name='email' onChange={handleChange} fullWidth />
					</Grid>
					<Grid item  xs={12}>
						<TextField required size='small' type='password' label='Password' name='password' onChange={handleChange} fullWidth />
					</Grid>
                    <Grid item  xs={12}>
                        <TextField size='small' required type='text' label='Location' name='location' onChange={handleChange} fullWidth/>
                    </Grid>
                
                    <Grid item xs={12}>
                        <TextField size='small'  type='text' label='University/College' name='school' onChange={handleChange} fullWidth />
                    </Grid>
				</Grid>
				{
					loading ?  <LoadingButton sx={{ mt: 3, mb: 2 }} loading variant="contained" fullWidth>Submit</LoadingButton> : <Button size='small' type='submit' variant='contained' onSubmit={handleSubmit} fullWidth  sx={{ mt: 3, mb: 2 }}>Register as an Intern</Button>
                }
				{
                    	error && <Alert variant="contained" severity="error">Signup Failed</Alert>
                }
			</form>
			<p className='p-addedd'>Already have an account? Login <a href='/internSign'>Here</a></p>
		</div>
  )
}

export default Login