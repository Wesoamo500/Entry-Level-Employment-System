import React from 'react'
import {Paper, Typography, Card,Grid,Button, Divider, Link} from '@mui/material'
import {Avatar, Spacer} from '@nextui-org/react'
import ArrowCircleRightOutlined from '@mui/icons-material/ArrowCircleRightOutlined'
import Links from './Links'
import HomeOutLinedIcon from '@mui/icons-material/HomeOutlined'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutline'
import UserIcon from '@mui/icons-material/AccountCircleOutlined'

const CloseSide = ({setSide}) => {
	const closeNav=()=>{
		setSide((prev)=>!prev)
	}
  return (
	<Paper elevation={0}  variant='outlined'  sx={{padding:'20px',height:'100vh',}}>
		<Grid item  my={2} display='flex' direction='row' justifyContent='space-between' alignItems='center'>
			<Typography sx={{display:{sm:'none'}}}>Job_FUG</Typography>
			<Button onClick={closeNav} sx={{marginLeft:'10px',display:{xs:'none',sm:'block'}}}><ArrowCircleRightOutlined/></Button>
		</Grid>
		<Spacer y={1.8}/>
		<Card clickable variant='outlined' color='primary' sx={{ display:'flex',direction:'row',alignItems:'center',columnGap:'30px',padding:'7px 7px',borderRadius:'8px',marginTop:'20px'}}>
			<Avatar color='primary' bordered size='lg'/>
		</Card>
		<Spacer y={1.2}/>
		<Divider/>
		<Spacer y={1.2}/>
		<Grid container>
			<Links icon={<HomeOutLinedIcon/>}  href='/dashboard/freshGraduate'/>
			
			<Links icon={<UserIcon />}  href='/dashboard/user' />
			
			<Links icon={<AddCircleOutlinedIcon/>}  href='/dashboard/addjobs' />
		</Grid>
	</Paper>
  )
}

export default CloseSide