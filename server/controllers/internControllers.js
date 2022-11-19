import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import Intern from '../models/internSchema.js'

export const getIntern =async (req,res) =>{
	try {
		const interns = await Intern.find()
		res.status(200).json(interns)

	} catch (error) {
		res.status(401).json({message:error.message})
	}

}
export const logIn =async (req,res) =>{
	const {email , password} = req.body
	try {
		const internExist = await Intern.findOne({email});
		if(!internExist) res.status(404).json({message:'User does not exist'})

		const isPasswordCorrect = bcrypt.compare(password,internExist.password);
		if(!isPasswordCorrect) res.status(400).json({message:'Invalid password'})

		const token = jwt.sign({email:internExist.email,id:internExist._id},'test',{expiresIn:'90d'})

		res.status(200).json({info:internExist,token})

	} catch (error) {
		res.status(500).json({message:'Something went wrong'});
	}
}

export const signUp = async(req,res)=>{
	const {firstname,surname,email,password,location,pic,school} = req.body
	console.log(req.body)
	try {
		const internExist = await Intern.findOne({email});

		if(internExist) res.status(400).json({message:'User already exists'})

		// if(password!==confirmPassword) res.status(400).json({message:'Paaword does not match'});

		const hashedPassword = await bcrypt.hash(password,12);

		const info = await Intern.create({email,password:hashedPassword,firstname:firstname,surname:surname,location,pic,school})

		const token = jwt.sign({email:info.email,id:info._id},'test',{expiresIn:'90d'})

		res.status(200).json({info,token})
		
	} catch (error) {
		res.status(500).json({message:'Something went wrong'});
		
	}
}

export const updateProfile = async(req,res)=>{
	const intern = await Intern.findById(req.userId)
	
	if (intern) {
		intern.firstname = req.body.firstname || user.firstname;
		intern.surname = req.body.surname || user.surname;
		intern.email = req.body.email || user.email;
		intern.pic = req.body.pic || user.pic;
		
		intern.location = req.body.location || user.location
		intern.school = req.body.school
		

		

		const updatedIntern = await intern.save()
		const token =jwt.sign({email:updatedIntern.email,id:updatedIntern._id},'test',{expiresIn:'90d'})
		res.json({info:updatedIntern,token})
	} else{
		res.status(404).json({message:'user not found'})
	}
}