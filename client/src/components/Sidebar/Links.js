import {Link,Card, Typography} from '@mui/material'
import {StylesProvider} from '@mui/styles'
import React from 'react'


const Links = ({icon,href,children,onClick}) => {
	
  return (
	  <Link underline='none' sx={{width:'100%',marginBottom:'30px'}} href={href} onClick={onClick}>
	  		<Card fullWidth variant='outlined' sx={{ display:'flex',direction:'row',alignItems:'center',columnGap:'15px',padding:'7px 14px',borderRadius:'8px'}}>
				{icon}
				{children}
			</Card>
	  </Link>

  )
}

export default Links