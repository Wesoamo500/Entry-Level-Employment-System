import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	firstname:{type:String,required:'true'},
	surname:{type:String,required:'true'},
	email:{type:String,required:'true'},
	password:{type:String,required:'true'},
	companyname:{type:String},
	location:{type:String},
	id:{type:String},
	pic:String,
	school:String,
	year_completed:{type:Date},
	vacancy:[]
})

export default mongoose.model('User',userSchema)