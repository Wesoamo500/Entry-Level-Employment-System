import React from 'react'
import {Input,Spacer} from '@nextui-org/react'
import {Button, Container, Grid, Paper, Typography} from '@mui/material'
import AuthSocial from './AuthSocial'
import useStyles from './style' 
import { Link } from 'react-router-dom'

const Form = ({isSignUp,setIsSignUp,handleClick}) => {
	const classes = useStyles()
	const handleChange=()=>{

	}
	const handleSubmit=()=>{

	}
  return (
	<Container className={classes.paper}>
		{
					isSignUp?(
						<>
							<Typography variant='h4'>Get Started for absolutely Free</Typography>
							<Typography variant='body2' sx={{my:2}}>No credit card needed</Typography>
						</>
					):(
						<>
							<Typography variant='h4'>Sign in to Job-FUG</Typography>
							<Typography variant='body2'  sx={{my:2}}>Enter your details</Typography>
						</>
					)
		}
		<AuthSocial/>
	
		<form>
			<Grid container>
				
				{
					isSignUp && (
						<>
							<Input placeholder='first name' size='lg' bordered xs={12} css={{my:10}} name='firstname'  onChange={handleChange}/>
							<Spacer x={3}/>
							<Input placeholder='last name' size='lg' bordered xs={12} css={{my:10}}  onChange={handleChange}/>
						</>
						
					)
					}
						
					<Input placeholder='email' size='lg' css={{marginTop:'18px'}} bordered onChange={handleChange} fullWidth/>
					<Spacer y={0.9}/>
					<Input.Password placeholder='password' size='lg' bordered onChange={handleChange} fullWidth/>
					<Spacer y={0.9}/>
					<Button color='primary' variant='contained' onClick={handleSubmit} fullWidth>{isSignUp?'Sign Up':'Login'}</Button>
			</Grid>
			<Spacer y={0.9}/>
		</form>
		<Button fullWidth onClick={handleClick} color='primary' variant='outlined'>{isSignUp?'Already have an account? Login':"Don't have an account yet? Sign Up"}</Button>
			{
				isSignUp&&(
					<Typography variant='body2'  sx={{my:2}} className={classes.gutter}>By Registering, I agree to Job-FUG's terms and conditions and privacy policy</Typography>
				)
			}
	</Container>
  )
}

export default Form