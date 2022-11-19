import React,{useState} from 'react'
import {Button, TextField} from '@mui/material'
import Filebase from 'react-file-base64'
import {useDispatch, useSelector} from 'react-redux'

import './Addjobs.css'
import {postJobs} from './../../../../actions/jobs'

const Addjobs = ({tog,setTog}) => {
  const [postJob,setPostJob] = useState({
    companyName:'',jobName:'',details:'',location:'',photo:'',link:''
  })




  const dispatch = useDispatch()

  const HandleSubmit = (e) =>{
    e.preventDefault()
    dispatch(postJobs(postJob))
    setPostJob({companyName:'',jobName:'',details:'',location:'',photo:'',link:''})
    setTog(()=>!tog)
  }
  const handleClick=(e)=>{
    setTog(()=>!tog)
  }
  return (
    
    <form autoComplete='off' className='addjob'  sx={{width:{xs:'80%',sm:'55%'},marginLeft:{xs:'0'}}}>
        <TextField fullWidth name='companyName' variant='outlined' label='Company Name' value={postJob.companyName} onChange={(e)=>setPostJob({...postJob,companyName:e.target.value})}/>
        <TextField fullWidth name='jobName' variant='outlined' label='Position' value={postJob.jobName} onChange={(e)=>setPostJob({...postJob,jobName:e.target.value})}/>
        <TextField fullWidth multiline minRows={6} name='details' variant='outlined' label='About vacancy' value={postJob.details} onChange={(e)=>setPostJob({...postJob,details:e.target.value})}/>
        <TextField fullWidth name='location' variant='outlined' label='Location' value={postJob.location} onChange={(e)=>setPostJob({...postJob,location:e.target.value})}/>
        <TextField fullWidth type='email' required name='link' variant='outlined' label='Email' value={postJob.link} onChange={(e)=>setPostJob({...postJob,link:e.target.value})}/>
        <Filebase
          type='file'
          multiple={false}
          onDone={({base64})=>{setPostJob({...postJob , photo:base64})}}
        />
        <Button fullWidth variant='contained' onClick={HandleSubmit}>Submit</Button>
        <Button fullWidth variant='outlined' onClick={handleClick}>cancel</Button>
    </form> 
  )
}

export default Addjobs