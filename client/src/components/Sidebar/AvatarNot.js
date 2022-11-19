import React from 'react'
import './AvatarNolt.css'
import NotificationsIcon from '@mui/icons-material/Notifications'
import {Avatar} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const AvatarNot = () => {
  return (
	<div className='top-right'>
		<div className='notification'>
			<div className='box'></div>
			<NotificationsIcon fontSize='large'/>
		</div>
		<div className='avatar-img'>
			<Avatar variant='primary'/>
		</div>
		<div className='horiz'>
			<MoreVertIcon fontSize='medium'/>
		</div>
	</div>
  )
}

export default AvatarNot