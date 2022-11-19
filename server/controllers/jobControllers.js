import mongoose from "mongoose";

import PostJob from "../models/JobSchema.js";

export  const getJobs= async(req,res)=>{
	const query = req.query
	console.log(query)
	
	try {
		if(query){
			const jobs = await PostJob.find(query)
			console.log(jobs)
			res.status(200).json(jobs)
		}else {
			const jobs = await PostJob.find()
			res.status(200).json(jobs)
		}
	} catch (error) {
		res.status(401).json({message:error.message})
	}
}



export const postJobs = async (req,res)=>{
	const newpost = req.body
	const newPost = new PostJob(newpost);
	try {
		await newPost.save()
		res.status(201).json(newPost)
		
	} catch (error) {
		res.status(409).json({message:error.message})
	}
}

export const deleteJob = async (req,res)=>{
	const {id} = req.params

	if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Posts found');

	await PostJob.findByIdAndRemove(id);

	res.json({message:'Successful'})
}
