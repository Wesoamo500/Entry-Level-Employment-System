import React from 'react'
import Jobs from './correct/Jobs'
import Addjobs from './AddJobs/Addjobs'
import Apply from './Apply/Apply'

import first from './first.jpg'

import './Job.css'



const Job = ({recruiter,setRecruiter,id,setId,email2,setEmail2,apply1,setApply1,user_one,user,tog,setTog}) => {
  return (
	<div className='bg'>
		<div  className='job'>
			<Jobs recruiter={recruiter} setRecruiter={setRecruiter} apply1={apply1} setApply1={setApply1} id={id} setId={setId}  email2={email2} setEmail2={setEmail2} user={user} tog={tog}/>
			{tog?<Addjobs tog={tog} setTog={setTog}/>:
			apply1?<Apply recruiter={recruiter} setRecruiter={setRecruiter} apply1={apply1} setApply1={setApply1} id={id} setId={setId}  email2={email2} />:null}
		</div>
		<div className='mobile-job'>
			{
				tog?<Addjobs tog={tog} setTog={setTog}/>:apply1?<Apply recruiter={recruiter} setRecruiter={setRecruiter} id={id} setId={setId}  email2={email2} apply1={apply1} setApply1={setApply1}/>:<Jobs recruiter={recruiter} setRecruiter={setRecruiter} id={id} setId={setId}  email2={email2} setEmail2={setEmail2} setApply1={setApply1} apply1={apply1} user_one={user_one} setTog={setTog} user={user} tog={tog}/>
			}
		</div>
	</div>
  )
}

export default Job