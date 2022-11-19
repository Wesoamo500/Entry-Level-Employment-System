import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/userSchema.js'

export const getUser =async (req,res) =>{
	try {
		const users = await User.find()
		res.status(200).json(users)

	} catch (error) {
		res.status(401).json({message:error.message})
	}

}
export const logIn =async (req,res) =>{
	const {email , password} = req.body
	try {
		const userExist = await User.findOne({email});
		if(!userExist) res.status(404).json({message:'User does not exist'})

		const isPasswordCorrect = bcrypt.compare(password,userExist.password);
		if(!isPasswordCorrect) res.status(400).json({message:'Invalid password'})

		const token = jwt.sign({email:userExist.email,id:userExist._id},'test',{expiresIn:'90d'})

		res.status(200).json({info:userExist,token})

	} catch (error) {
		res.status(500).json({message:'Something went wrong'});
	}
}

export const signUp = async(req,res)=>{
	const {firstname,surname,email,password,companyname,location,pic,school,year_completed} = req.body
	
	try {
		const userExist = await User.findOne({email});

		if(userExist) res.status(400).json({message:'User already exists'})

		// if(password!==confirmPassword) res.status(400).json({message:'Paaword does not match'});

		const hashedPassword = await bcrypt.hash(password,12);

		const info = await User.create({email,password:hashedPassword,firstname:firstname,surname:surname,companyname,location,pic,school,year_completed})

		const token = jwt.sign({email:info.email,id:info._id},'test',{expiresIn:'90d'})

		res.status(200).json({info,token})
		
	} catch (error) {
		res.status(500).json({message:'Something went wrong'});
		
	}
}

export const updateProfile = async(req,res)=>{
	console.log(req.userId)
	const user = await User.findById(req.userId)
	console.log(user)
	if (user) {
		user.firstname = req.body.firstname || user.firstname;
		user.surname = req.body.surname || user.surname;
		user.email = req.body.email || user.email;
		user.pic = req.body.pic || user.pic;
		user.companyname = req.body.companyname;
		user.location = req.body.location || user.location
		user.school = req.body.school
		user.year_completed = req.body.year_completed

		

		const updatedUser = await user.save()
		const token =jwt.sign({email:updatedUser.email,id:updatedUser._id},'test',{expiresIn:'90d'})
		res.json({info:updatedUser,token})
	} else{
		res.status(404).json({message:'user not found'})
	}
}