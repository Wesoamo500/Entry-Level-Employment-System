import React,{useEffect,useState} from 'react'
import {Avatar, Button, Link,Toolbar} from '@mui/material'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/MenuOutlined'
import ArrowOutlined from '@mui/icons-material/ArrowDropDownOutlined'
import LogOutIcon from '@mui/icons-material/LogoutOutlined'
import CloseIcon from '@mui/icons-material/CloseOutlined'
import HomeIcon from '@mui/icons-material/HomeOutlined'

import GroupIcon from '@mui/icons-material/GroupOutlined'
import ContactIcon from '@mui/icons-material/ContactPageOutlined'
import AddIcon from '@mui/icons-material/Add'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import logo from '../logo.png'
import Search from './Search'


const Navbar = ({tog,setTog,user,setUser,pathname}) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const logOut = ()=>{
		dispatch({type:'LOGOUT'})

		navigate('/')

		setUser(null);
	}
	const [showLogOutBtn,setShowLogOutBtn] = useState(false)
	const [showMenu,setShowMenu] = useState(false)
	const handleClick = () =>{
		setShowLogOutBtn(!showLogOutBtn)
	}
	const sideMenuClick = () =>{
		setShowMenu(!showMenu)
	}

	const auth =  useSelector((state)=>state.auth);

    const { authData } = auth

	useEffect(()=>{
		setUser(()=>JSON.parse(localStorage.getItem('profile')))
	},[setUser])
  return (
	  <div style={{display:((pathname.slice(0,6)==='/login')||(pathname.slice(0,7)==='/signup')||(pathname.slice(0,11)==='/internsign')||(pathname.slice(0,18)==='/internRegister'))?'none':'block'}}>
		<Desktopheader authData={authData} user={user} showLogOutBtn={showLogOutBtn} logOut={logOut} handleClick={handleClick}/>
		<Mobileheader authData={authData} sideMenuClick={sideMenuClick} user={user} showLogOutBtn={showLogOutBtn} logOut={logOut} handleClick={handleClick}/>
		{
			showMenu&&(
				<Menu tog={tog} setTog={setTog} authData={authData} user={user} sideMenuClick={sideMenuClick} showLogOutBtn={showLogOutBtn} logOut={logOut} handleClick={handleClick}/>
			)
		}
	  </div>
  )
}

const Menu = ({authData,tog,setTog,logOut,sideMenuClick}) =>{
	return(
		<div className='sidemenu'>
			<div style={{display: 'flex',color:'white', alignItems: 'center',justifyContent:'space-between'}}>
				<div className='logo'>E-LES</div>
				<CloseIcon color='white' onClick={sideMenuClick} />
			</div>
			<div className='link-menu'>
				<div>
					<Search className='search'/>
				</div>
				<div style={{color:'white'}}>
					<HomeIcon/>
					<Link underline='none' color='white'  href='/'>Home</Link>
				</div>
				<div style={{color:'white'}}>
					<Link underline='none' color='white'  href='#about'>About Job4u</Link>
				</div>
				<div style={{color:'white'}}>
					<GroupIcon color='white'/>
					<Link underline='none' color='white'  href='#team'>Team</Link>
				</div>
				<div style={{color:'white'}}>
					<ContactIcon color='white'/>
					<Link underline='none' color='white'  href='#contact'>Contact Us</Link>
				</div>
				{authData?(
						<div style={{color:'white'}} className='avatar'>
							<Avatar component={Link} href="/profile" alt={authData?.info?.firstname} src={authData?.info?.pic}>{authData?.info?.firstname.charAt(0)}</Avatar>
							<p>{authData?.info?.firstname} {authData.info.surname}</p>
						</div>
					):(
						<div  style={{display: 'flex', alignItems: 'center',flexDirection: 'column',rowGap:'16px'}}>
							<Link underline='none' className='login' color='black' mx={5} href='/login'>Login</Link>
							<Link underline='none' color='white' backgroundColor='black' border='1px solid black' padding='10px 30px' href='/signup'>sign Up</Link>
						</div>
				)}
				{
					authData&&(
						<div>
							<Link underline='none' color='white'  href='/jobs'>Available Jobs</Link>
						</div>
					)
				}
				{authData &&(
					<div style={{border:'none'}}>
						<Button startIcon={<LogOutIcon/>} size='small' variant='contained' color='secondary' fullWidth onClick={logOut}>LogOut</Button>
					</div>
				)}{
					authData.info.companyname&&(
						<div style={{border:'none'}}>
							<Button startIcon={<AddIcon/>} size='small' variant='contained' color='primary' fullWidth onClick={()=>{setTog(!tog)}}>Add Job</Button>
						</div>
					)
				}
			</div>
		</div>
	)
}

const Desktopheader = ({authData,user,showLogOutBtn,handleClick,logOut}) =>{
	return (
		<header className='header desktop-version'>
			<Toolbar sx={{display:'flex',alignItems:'center',justifyContent:'space-between',backgroundColor:'white'}}>
				<div className='logo'>
					E-LES
				</div>
				<div style={{backgroundColor:'white'}}>
					<Link sx={{backgroundColor:'white'}} underline='none' color='black' mx={5} href='#about'>About Job4u</Link>
					<Link sx={{backgroundColor:'white'}} underline='none' color='black' href='#team'>Team</Link>
					<Link sx={{backgroundColor:'white'}} underline='none' color='black' mx={5} href='#contact'>Contact Us</Link>
				</div>
				{authData?(
					<div className='avatar'>
						<Avatar alt={authData?.info?.firstname} src={authData?.info?.pic}>{authData?.info?.firstname.charAt(0)}</Avatar>
						<p>{authData?.info?.firstname} {authData.info.surname}</p>
						<ArrowOutlined fontSize='medium' onClick={handleClick}/>
					</div>
				):(
					<div>
						<Link underline='none' className='login' color='black' borderRadius='6px' mx={5} href='/login'>Login</Link>
						<Link underline='none' color='white' backgroundColor='black' borderRadius='6px'  padding='10px 30px' href='/signup'>sign Up</Link>
						<Link underline='none' color='white' backgroundColor='violet' mx={5} borderRadius='6px' padding='10px 30px' href='/internsign'>Internship</Link>
					</div>
				)}		
			</Toolbar>
			{(showLogOutBtn && authData) ?(
				<div className='drop-down'>
					<Button startIcon={<LogOutIcon/>} variant='contained' color='secondary' onClick={logOut}>LogOut</Button>
				</div>
			):null}
			
		</header>
	)
}

const Mobileheader = ({authData,user,showLogOutBtn,handleClick,logOut,sideMenuClick}) =>{
	return (
		<header className='header mobile-version' >
			<Toolbar  sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
				<div onClick={sideMenuClick}><MenuIcon/></div>
				<div className='logo'>E-LES</div>
				{authData && (
					<div className='avatar'>
						<Avatar alt={authData?.info?.firstname} src={authData?.info?.pic}>{authData?.info?.firstname.charAt(0)}</Avatar>
						<p>{authData?.info?.firstname} {authData.info.surname}</p>
					</div>
				)} 
			</Toolbar>
			{showLogOutBtn?(
				<div className='drop-down'>
					<Button startIcon={<LogOutIcon/>} variant='contained' color='secondary' onClick={logOut}>LogOut</Button>
				</div>
			):null}
		</header>
	)
}

export default Navbar