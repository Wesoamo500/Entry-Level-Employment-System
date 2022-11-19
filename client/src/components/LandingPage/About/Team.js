import {Typography} from '@mui/material'
import React from 'react'
import './About.css'

const Team = () => {
  return (
	<div className='whole-team' id='team'>
		<Typography variant='h4' sx={{textAlign:'center'}}>TEAM</Typography>
		<div className='team'>
			<div className='laylow'>
				<div className='img'></div>
				<div className='text'></div>
			</div>
			<div className='portia'>
				<div className='img'></div>
				<div className='text'></div>
			</div>
			<div className='manan'>
				<div className='img'></div>
				<div className='text'></div>
			</div>
		</div>
	</div>

  )
}

export default Team