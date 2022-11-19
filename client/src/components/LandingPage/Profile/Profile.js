import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Filebase from 'react-file-base64'
import './profile.css'
import {Grid,TextField,Button} from '@mui/material'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { updateProfile } from '../../../actions/auth';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';


const Profile = () =>{


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

    const navigate = useNavigate()

    const dispatch = useDispatch();

    
    
    const auth =  useSelector((state)=>state.auth);

    const {authData} = auth

    const userUpdate = useSelector((state)=>state.userUpdate);
    const{loading,error,success} = userUpdate;

    const [firstname,setFirstname] = useState("");
    const [surname,setSurname] = useState("");
    const [email,setEmail] = useState("");
    const [pic,setPic] = useState("");
    const [location,setLocation] = useState("");
    const [companyname,setCompanyname] = useState("");
    const [school,setSchool]=useState("")
    const [year_completed,setYearCompleted]=useState("")
    

    

	const handleSubmit = (e)=>{
		e.preventDefault()
		dispatch(updateProfile({firstname,surname,email,pic,companyname,location,school,year_completed}))	
	}
	
	
    useEffect(()=>{
        if(!authData?.info){
            navigate('/')
        }else{
            setFirstname(()=>authData.info.firstname)
            setSurname(()=>authData.info.surname)
            setEmail(()=>authData.info.email)
            setPic(()=>authData.info.pic)
            setCompanyname(()=>authData.info.companyname)
            setLocation(()=>authData.info.location)
            setSchool(()=>authData.info.school)
            setYearCompleted(()=>authData.info?.year_completed?.slice(0,10))
        }
    },[navigate,authData?.info])
    return(
        <div className='profile-container'>
            <form className='form-update' method='post' onSubmit={handleSubmit}>
                <div className='img-avatar'>
                    <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                        <Avatar sx={{ width: 80, height: 80 }} src={authData?.info.pic} alt={authData?.info.name}/>
                    </StyledBadge>
                    <Filebase type='file' multiple={false} onDone={({base64})=>{setPic(base64)}} />
                </div>
                <Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField size='small' value={firstname}  type='text' label='First Name' name='firstname' onChange={(e)=>setFirstname(e.target.value)} fullWidth/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField size='small' value={surname}  type='text' label='Surname' name='surname' onChange={(e)=>setSurname(e.target.value)} fullWidth/>
					</Grid>
					<Grid item xs={12}>
						<TextField size='small' value={email}  type='email' label='Email' name='email' onChange={(e)=>setEmail(e.target.value)} fullWidth />
					</Grid>
                    <Grid item xs={12}>
						<TextField size='small' value={school}  type='text' label='University/College' name='school' onChange={(e)=>setSchool(e.target.value)} fullWidth />
					</Grid>
                    <Grid item xs={12}>
						<TextField size='small' value={year_completed}  type='date' label='Date Completed' name='year_completed' onChange={(e)=>setYearCompleted(e.target.value)} fullWidth />
					</Grid>
                    <Grid item  xs={12} sm={6}>
                        <TextField  size='small' value={companyname} type='text' label='Company Name' name='companyname' onChange={(e)=>setCompanyname(e.target.value)} fullWidth/>	
                    </Grid>
                    <Grid item  xs={12} sm={6}>
                        <TextField  size='small' value={location} type='text' label='Location' name='location' onChange={(e)=>setLocation(e.target.value)} fullWidth/>
                    </Grid>
                </Grid>
                {
                    loading ?  <LoadingButton sx={{ mt: 3, mb: 2 }} loading variant="outlined">Submit</LoadingButton> : <Button type='submit' variant='contained' onSubmit={handleSubmit}   sx={{ mt: 3, mb: 2 }}>update</Button>
                }
                {
                    error && <Alert variant="contained" severity="error">Update Unsuccessful</Alert>
                }
                {
                    success && <Alert variant="contained" severity="success">Update Successfully</Alert>
                }
				
            </form>
        </div>
    )
}

export default Profile;