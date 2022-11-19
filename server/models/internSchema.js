import mongoose from "mongoose";

const internSchema = mongoose.Schema({
	firstname:{type:String,required:'true'},
	surname:{type:String,required:'true'},
	email:{type:String,required:'true'},
	password:{type:String,required:'true'},
	location:{type:String},
	id:{type:String},
	pic:String,
	school:String,
	vacancy:[]
})

export default mongoose.model('Intern',internSchema)