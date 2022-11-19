import React from 'react'
import {Paper, Typography, Card,Grid,Button,Divider,Link} from '@mui/material'
import {Avatar, Spacer} from '@nextui-org/react'
import ArrowCircleLeftOutlined from '@mui/icons-material/ArrowCircleLeftOutlined'
import HomeOutLinedIcon from '@mui/icons-material/HomeOutlined'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutline'
import UserIcon from '@mui/icons-material/AccountCircleOutlined'

import Links from './Links'

const OpenSide = ({setSide}) => {
	const openNav=()=>{
		setSide((prev)=>!prev)
	}
	
  return (
	<Paper elevation={0} variant='outlined'  sx={{padding:'20px',height:'100vh'}}>
		<Grid item  my={2} display='flex' direction='row' justifyContent='space-between' alignItems='center'>
			<Typography sx={{display:{sm:'none'}}}>Job_FUG</Typography>
			<Button onClick={openNav}><ArrowCircleLeftOutlined/></Button>
		</Grid>
		<Spacer y={1.8}/>
		<Card clickable variant='outlined' color='primary' sx={{ display:'flex',direction:'row',alignItems:'center',columnGap:'30px',padding:'7px 14px',borderRadius:'8px',marginTop:'20px'}}>
			<Avatar color='primary' bordered size='lg'/>
			<Typography variant='body2'>Abdul Manan</Typography>
		</Card>
		<Spacer y={1.5}/>
		<Divider/>
		<Spacer y={1.5}/>
		<Grid container>
			<Links  icon={<HomeOutLinedIcon    />} href='/dashboard/freshGraduate'><Typography variant='body1'>Home</Typography></Links>
			
			<Links icon={<UserIcon />}  href='/dashboard/user'><Typography variant='body1'>User</Typography></Links>
			
			<Links  icon={<AddCircleOutlinedIcon/>}  href='/dashboard/addjobs'><Typography variant='body1'>Add Jobs</Typography></Links>
		</Grid>
	</Paper>
  )
}

export default OpenSide