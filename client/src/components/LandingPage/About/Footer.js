import React from 'react'
import facebook from './Facebook.png'
import twitter from './Twitter.png'
import linkedin from './linkedin.png'


const Footer = () => {
  return (
	<footer className='footer'>
		<div>
			<a href='https://www.facebook.com/'>
				<img src={facebook} alt='facebook' width='100%' height='100%'/>
			</a>
		</div>
		<div>
			<a href='https://www.twitter.com/'>
				<img src={twitter} alt='Twitter' width='100%' height='100%'/>
			</a>
		</div>
		<div>
			<a href='https://www.linkedin.com/'>
				<img src={linkedin} alt='Linkedin' width='100%' height='100%'/>
			</a>
		</div>
	</footer>
  )
}

export default Footer