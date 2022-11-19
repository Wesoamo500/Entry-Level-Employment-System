import { Skeleton} from '@mui/material'
import React from 'react'
import '../jobs/correct/index.css'



import { useSelector } from 'react-redux'
import Card from '../jobs/correct/Card'

const InternshipProgram = ({recruiter,setRecruiter,id,setId,email2,setEmail2,apply1,setApply1,tog,user}) => {
	let jobs = useSelector((state)=>state.jobs)
	let internships = jobs.filter((job)=>job.details==='Internship Program')
  return (
	 internships.length?(
		<div className='container'>
			<div className={(tog || apply1)?`grid_two`:`grid`} style={{width:(tog||apply1)?'80%':'100%'}}>
					{
						internships.map((internship)=>(
							<Card key={internship._id} recruiter={recruiter} setRecruiter={setRecruiter} id={id} setId={setId}  email2={email2} setEmail2={setEmail2} apply1={apply1} setApply1={setApply1} user={user} job={internship}/>
						))		
					}
			</div>
		</div>)
		:(
			<Skeleton animation="wave" variant='rectangular' width={200} />
		)
  	)
}

export default InternshipProgram