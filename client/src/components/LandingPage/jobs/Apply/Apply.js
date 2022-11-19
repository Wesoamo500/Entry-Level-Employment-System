import React,{useState} from 'react'
import {Button, TextField} from '@mui/material'
import Filebase from 'react-file-base64'
import {useDispatch, useSelector} from 'react-redux'
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';

import '../AddJobs/Addjobs.css'
import {applicationing} from './../../../../actions/auth'

const Apply = ({recruiter,id,email2,apply1,setApply1}) => {

  const applications = useSelector((state)=>state.applications);
  const{loading,error,success} = applications;

  const [application,setApplication] = useState({
    email:'',fullname:'',date:'',collegename:'',CV:'',emailR:email2,jobId:id,recruiters:recruiter,
  })




  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.auth)

  

  const  {authData} = auth
  const HandleSubmit = (e) =>{
    e.preventDefault()
    console.log(applications)
    dispatch(applicationing(application))
    setApplication({ email:'',fullname:'',date:'',collegename:'',CV:'',emailR:email2,jobId:'',recruiters:recruiter})
  }
  const handleClick=()=>{
    setApply1(()=>!apply1)
  }
  return (
    
    <form autoComplete='off' className='addjob'  sx={{width:{xs:'80%',sm:'55%'},marginLeft:{xs:'0'}}}>
        <TextField fullWidth  InputProps={{
            readOnly: true,
          }} type='email' required name='emailR' variant='outlined' label="recruiter's Email" value={application.emailR}/>
        <TextField fullWidth type='email' required name='email' variant='outlined' label='E-mail' value={application.email} onChange={(e)=>setApplication({...application,email:e.target.value})}/>
        <TextField fullWidth name='fullname' required variant='outlined' label='Full Name' value={application.fullname} onChange={(e)=>setApplication({...application,fullname:e.target.value})}/>
        <TextField fullWidth name='collegename' required variant='outlined' label='University or College' value={application.collegename} onChange={(e)=>setApplication({...application,collegename:e.target.value})}/>
        <TextField type='date' fullWidth name='date' required variant='outlined' label='Completed Date' value={application.date.slice(0,10)} onChange={(e)=>setApplication({...application,date:e.target.value.slice(0,10)})}/>
        <label>Upload CV</label>
        <Filebase
          type='file'
          multiple={false}
          onDone={({base64})=>{setApplication({...application , CV:base64})}}
        />
        {
            loading ?  <LoadingButton sx={{ mt: 3, mb: 2 }} loading variant="outlined">Submit</LoadingButton> : <Button type='submit' fullWidth variant='contained' onClick={HandleSubmit}>Apply</Button>
            }
            {
                error && <Alert variant="outlined" severity="error">Application failed</Alert>
            }
            {
                success && <Alert variant="outlined" severity="success">Application Successfully</Alert>
        }
        <Button fullWidth variant='outlined' onClick={handleClick}>cancel</Button>
    </form> 
  )
}

export default Apply