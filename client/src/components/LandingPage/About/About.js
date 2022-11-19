import React from 'react'
import {Typography} from '@mui/material'
import './About.css'

const About = () => {
  return (
	<div className='whole' id='about'>
		<Typography variant='h4'>ABOUT US</Typography>
		<div className='stats'>
			<div>
				<h2>100+</h2><br/>
				<p>Users</p>
			</div>
			<div>
				<h2>50+</h2><br/>
				<p>Companies</p>
			</div>
			<div>
				<h2>12+</h2><br/>
				<p>Jobs available</p>
			</div>
			<div>
				<h2>80%</h2><br/>
				<p>Employment rate</p>
			</div>
		</div>
	</div>
  )
}

export default About