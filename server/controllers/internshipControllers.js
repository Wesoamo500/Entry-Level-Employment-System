
import InternshipProgram from "../models/InternshipSchema.js";


export  const getInternships= async(req,res)=>{
	const query = req.query
	try {
		if(query){
			const internships = await InternshipProgram.find(query)
			res.status(200).json(internships)
		}else {
			const internships = await InternshipProgram.find()
			res.status(200).json(internships)
		}
	} catch (error) {
		res.status(401).json({message:error.message})
	}
}



export const postInternships = async (req,res)=>{
	const newpost = req.body
	const newPost = new InternshipProgram(newpost);
	try {
		await newPost.save()
		res.status(201).json(newPost)
		
	} catch (error) {
		res.status(409).json({message:error.message})
	}
}

