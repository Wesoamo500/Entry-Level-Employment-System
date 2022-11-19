import base64 from 'base64topdf';
import contactEmail from './Email.js';
import Application from '../models/ApplicationSchema.js';
import PostJob from '../models/JobSchema.js';


export const sendApplication =async (req,res)=>{
	
	const applicate = req.body
	console.log(applicate)
	const newApplication = new Application(applicate);
	let decodedBase64 = base64.base64Decode(applicate.CV, `${applicate.fullname}'s CV`);
	const mail = {
		from:'name',
		to:applicate.emailR,
		subject:'APPLICATION',
		html:`<p>Name: ${applicate.fullname}</p>
			<p>Email: ${applicate.email}</p>
            <p>College/University's name: ${applicate.collegename}</p>
            <p>Date Completed College/University: ${applicate.date}</p>`,
		attachments:[{
				filename:`${applicate.fullname}.pdf`,
				content: decodedBase64,
		}]

	}
	const mail_to_applicants = {
		from:applicate.email,
		to:'sulemanabdulmanan@gmail.com',
		subject:'Application',
		html:`<p>Your Application has successfully being sent</p>`
	}
	
try{
	await newApplication.save()
	contactEmail.sendMail(mail,(error)=>{
		error?console.log('error'):console.log('sentor')
	})
	contactEmail.sendMail(mail_to_applicants,(error)=>{
		error?console.log('error'):console.log('sent')
	})
	const jobApp = await PostJob.findById(applicate.jobId)
	jobApp["about"].push(applicate)
	console.log(jobApp)
	res.json({message:'application successful'})
}catch(error){
	res.json({message:'application not sent'})
}
}