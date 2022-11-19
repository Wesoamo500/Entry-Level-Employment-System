import {AppBar, Grid, Toolbar, Typography} from '@mui/material';
import React, {useState} from 'react'
import {Outlet} from 'react-router-dom';
import AvatarNot from './AvatarNot';
import CloseSide from './CloseSide';
import MenuIcon from '@mui/icons-material/MenuOutlined'

import OpenSide from './OpenSide'


const Sidebar = () => {
	const [side,setSide] = useState(true);
	const [showMenu,setShowMenu] = useState(false);
	const handleMenu = () => {
		setShowMenu(!showMenu)
	}
  return (
	  <Grid container display='flex' direction='row'>
		<AppBar position='stick'>
			<Toolbar>
				<Typography variant='h4' sx={{color:'white',display:{xs:'none',sm:'block'}}}>Job_FUG</Typography>
			</Toolbar>
				<MenuIcon onClick={handleMenu} fontSize='large'   sx={{display:{xs:'block',sm:'none'},color:'white',position:'absolute'}}/>
				<AvatarNot/>
		</AppBar>
		
		{
			showMenu && (
				<OpenSide/>
			)
		}
	  	<Grid item sm={side?3:1}   sx={{display:{xs:'none',sm:'block'}}}>
	  		{
				side?<OpenSide side={side} setSide={setSide}/>:<CloseSide  side={side} setSide={setSide}/>
			}
		</Grid>
		<Grid item sm={side?9:11}  xs={12} sx={{border:"1px solid blue",marginTop:'0',position:'relative'}}>
			<Outlet/>
		</Grid>
	  </Grid>
	
  )
}

export default Sidebar