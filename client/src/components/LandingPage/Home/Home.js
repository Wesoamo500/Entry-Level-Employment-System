import React, { useEffect } from 'react'
import hero from '../illustration_register.png'
import {Link, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import './Home.css'
import About from '../About/About'
import Team from '../About/App'
import Contact from '../About/Contact'
import Footer from '../About/Footer'

const Home = () => {
	const navigate = useNavigate()

	useEffect(()=>{
		const user = localStorage.getItem('profile')

		if(user){
			navigate('/jobs')
		}
	},[navigate])
  return (
	<div>
		<section className='section'>
			<div className='hero'>
				<img src={hero} alt='hero'/>
			</div>
			<div className='content'>
				<Typography sx={{ xs:{marginLeft:'0px',width:'100%',padding:'0',textAlign:'center',fontSize:'20px'},sm:{marginLeft:'20px',width:'70%'}}}  className='h3'  variant='h3'>Are you looking for a job?</Typography>
				<Typography sx={{ xs:{marginLeft:'0px',width:'100%',padding:'0',textAlign:'center'},sm:{marginLeft:'20px',width:'30%',border:'1px solid black'}}} variant='body2'>A newly graduate with less than three years or job experience, don't get fraustrated E-LES is here to solve your employment problems</Typography>
				<div>
					<Link underline='none' className='login'  color='black' borderRadius='6px' border='1px solid black' padding='10px 30px' mx={5} href='/login'>Login</Link>
					<Link underline='none' color='white' backgroundColor='black' borderRadius='6px' padding='10px 30px' href='/signup'>sign Up</Link>
					<Link underline='none' color='white' backgroundColor='violet' borderRadius='6px' padding='10px 30px' mx={5} href='/internsign'>Internship</Link>
				</div>
			</div>
		</section>
		<About/>
		<Team/>
		<Contact/>
		<Footer/>
	</div>
  )
}

export default Home