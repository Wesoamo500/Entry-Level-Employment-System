import {Link, Toolbar} from '@mui/material'
import React from 'react'
import './Navbar.css'




import {Button} from '@mui/material'
import Search from './Search'

const Usernav = ({word,setWord, tog,setTog,user}) => {


	
	const handleClick =()=>{
		setTog(!tog)
	}
  return (
	<header className='header-nav'>
		<Toolbar sx={{display:'flex',alignItems:'center',flexDirection:'row-reverse',backgroundColor:'whitesmoke'}}>
			<Link underline='none' sx={{':hover':{borderBottom:'1px solid white'},backgroundColor:'whitesmoke'}} color='black' href='/jobs'>Available jobs</Link>
			<Link underline='none' sx={{':hover':{borderBottom:'1px solid white'},backgroundColor:'whitesmoke'}} color='black' mx={5} href='/profile'>ProFile</Link>
			<Button sx={{display:(user)?'block':'none'}}  variant='contained' onClick={handleClick} className='btn'>Add</Button>
			<Search/>
		</Toolbar>
	</header>
  )
}

export default Usernav