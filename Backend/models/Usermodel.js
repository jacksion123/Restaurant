import mongoose from "mongoose"
const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,requires:true},
    cartData:{type:Object,default:{}}
},{minimize:false})


const UserModel = mongoose.models.user || mongoose.model("user",userSchema);
export default UserModel;