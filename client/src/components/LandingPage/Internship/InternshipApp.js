import React from 'react'
import Jobs from './InternshipPrograms'

import Apply from '../jobs/Apply/Apply'



import '../jobs/Job.css'



const InternshipApp = ({recruiter,setRecruiter,id,setId,email2,setEmail2,apply1,setApply1,user_one,user,tog,setTog}) => {
  return (
	<div className='bg'>
		<div  className='job'>
			<Jobs recruiter={recruiter} setRecruiter={setRecruiter} apply1={apply1} setApply1={setApply1} id={id} setId={setId}  email2={email2} setEmail2={setEmail2} user={user} tog={tog}/>
			
			{apply1?<Apply recruiter={recruiter} setRecruiter={setRecruiter} apply1={apply1} setApply1={setApply1} id={id} setId={setId}  email2={email2} />:null}
		</div>
		<div className='mobile-job'>
			{
			    apply1?<Apply recruiter={recruiter} setRecruiter={setRecruiter} id={id} setId={setId}  email2={email2} apply1={apply1} setApply1={setApply1}/>:<Jobs recruiter={recruiter} setRecruiter={setRecruiter} id={id} setId={setId}  email2={email2} setEmail2={setEmail2} setApply1={setApply1} apply1={apply1} user_one={user_one} setTog={setTog} user={user} tog={tog}/>
			}
		</div>
	</div>
  )
}

export default InternshipApp