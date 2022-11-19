import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({
	companyName:String,
	jobName:{
		type:String,
	},
	date:{
		type:Date,
		default:new Date()
	},
	details:String,
	photo:String,
	link:String,
	location:String,
	about:[Object]
})

const PostJob = mongoose.model('PostJob',jobSchema)

export default PostJob;