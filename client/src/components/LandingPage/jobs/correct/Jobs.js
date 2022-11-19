import { Skeleton} from '@mui/material'
import React from 'react'
import './index.css'



import { useSelector } from 'react-redux'
import Card from './Card'

const JobSet = ({recruiter,setRecruiter,id,setId,email2,setEmail2,apply1,setApply1,tog,user}) =>{
	return(
		<React.Fragment>
			{
				user.info.companyname ? <Recruitor recruiter={recruiter} setRecruiter={setRecruiter} id={id} setId={setId} email2={email2} setEmail2={setEmail2} apply1={apply1} setApply1={setApply1} tog={tog} user={user}/>
				:
				<FreshGraduate recruiter={recruiter} setRecruiter={setRecruiter} id={id} setId={setId} email2={email2} setEmail2={setEmail2} apply1={apply1} setApply1={setApply1} tog={tog} user={user}/>
			}
		</React.Fragment>
	)
}

const FreshGraduate = ({recruiter,setRecruiter,id,setId,email2,setEmail2,apply1,setApply1,tog,user}) => {
	let jobs = useSelector((state)=>state.jobs)
	let jobGraduates =  jobs.filter((job)=>job.details!=='Internship Program')
	
  return (
	 jobGraduates.length?(
		<div className='container'>
			<div className={(tog || apply1)?`grid_two`:`grid`} style={{width:(tog||apply1)?'80%':'100%'}}>
					{
						jobGraduates.map((jobGraduate)=>(
							<Card key={jobGraduate._id} recruiter={recruiter} setRecruiter={setRecruiter} id={id} setId={setId}  email2={email2} setEmail2={setEmail2} apply1={apply1} setApply1={setApply1} user={user} job={jobGraduate}/>
						))		
					}
			</div>
		</div>)
		:(
			<Skeleton animation="wave" variant='rectangular' width={200} />
		)
  	)
}

const Recruitor = ({recruiter,setRecruiter,id,setId,email2,setEmail2,apply1,setApply1,tog,user}) =>{
	let jobs = useSelector((state)=>state.jobs)
	let recruitors = jobs.filter((job)=>job.companyName===user.info.companyname)
	return(
		recruitors.length?(
			<div className='container'>
				<div className={(tog || apply1)?`grid_two`:`grid`} style={{width:(tog||apply1)?'80%':'100%'}}>
						{
							recruitors.map((recruitor)=>(
								<Card key={recruitor._id} recruiter={recruiter} setRecruiter={setRecruiter} id={id} setId={setId}  email2={email2} setEmail2={setEmail2} apply1={apply1} setApply1={setApply1} user={user} job={recruitor}/>
							))		
						}
				</div>
			</div>)
			:(
				<Skeleton animation="wave" variant='rectangular' width={200} />
			)
	)
}

export default JobSet