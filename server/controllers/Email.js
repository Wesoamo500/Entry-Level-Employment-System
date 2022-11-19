import nodemailer from 'nodemailer'

const contactEmail = nodemailer.createTransport({
	service:'gmail',
	auth:{
		user:'sulemanabdulmanan@gmail.com',
		pass:'jlqu lrcx qmeg lxuz'
	}
});

contactEmail.verify((error)=>{
	if(error){
		console.log(error);
	} else{
		console.log('Ready to send')
	}
})

export default contactEmail