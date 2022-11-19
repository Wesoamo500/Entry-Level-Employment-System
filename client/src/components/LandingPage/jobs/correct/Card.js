import React,{useState} from 'react'
import {  useDispatch } from 'react-redux'
import LocationIcon from '@mui/icons-material/LocationOnOutlined'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import {deleteJob} from '../../../../actions/jobs'
import './index.css'
import { Button } from '@mui/material'



const Card = ({setRecruiter,setId,setEmail2,apply1,setApply1,job,user}) => {
	
	const dispatch = useDispatch()
  	const handleDelete = (e) =>{
    e.preventDefault()
    dispatch(deleteJob(job._id))
  }
  const handleClick = () =>{
	setApply1(()=>!apply1)
	setEmail2(job.link)
	setId(job._id)
	setRecruiter(job.companyName)
  }
  return (
	<div className='card' >
		<div className='img-container' style={{position:'relative'}}>
			<img src={job.photo} alt='job'/>
			<DeleteIcon sx={{position:'absolute',right:0,display:(job?.companyName==user?.info?.companyname)?'block':'none'}} onClick={handleDelete}/>
		</div>
		<div className='texts' >
			<h5>{job.companyName}</h5>
			<p className='pos' style={{margin:'20px,0px,20px,0px'}}>{job.jobName}</p>
			<p className='details'>{job.details}</p>	
		</div>
		<div className='loc-pos'>
			<div className='loc'><span><LocationIcon sx={{backgroundColor:'white'}}/></span><p>{job.location}</p></div>
			{!user.info.companyname&&<Button  sx={{fontSize:'12px'}} onClick={handleClick} variant='outlined'>Apply</Button>}
		</div>
	</div>
  )
}

export default Card