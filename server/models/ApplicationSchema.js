import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
	fullname:{type:String,required:'true'},
	email:{type:String,required:'true'},
	collegename:{type:String,required:'true'},
	CV:{type:String},
    id:{type:String},
	year_completed:{type:Date}
})

export default mongoose.model('Application',applicationSchema)