import mongoose from 'mongoose'

const internSchema = mongoose.Schema({
	companyName:String,
	program:{
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

const InternshipProgram = mongoose.model('InternshipProgram',internSchema)

export default InternshipProgram;