import contactEmail from './Email.js'


export const sendEmail = (req,res)=>{
	
	const {username,email,message} = req.body
	const mail = {
		from:'name',
		to:'sulemanabdulmanan@gmail.com',
		subject:'Contact Form submission',
		html:`<p>Name: ${username}</p>
			<p>Email: ${email}</p>
			<p>Message: ${message}</p>`	
	}
	contactEmail.sendMail(mail,(error)=>{
		error?res.json({status:'Error'}):res.json({status:'Message Sent'})
	})
}