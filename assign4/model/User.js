// import mongoose from "mongoose";
// import bycrypt from 'bcryptjs'

// const UserSchema = new mongoose.Schema({

//     username:{
//         type:String,
//         required: true,
//     },

//     email:{
//         type:String,
//         required: true,
//         unique: true,
//     },

//     password:{
//         type:String,
//         required: true
//     },

// },{
//     timestamps: true
// });


// UserSchema.pre('save', async function(next){
//     if(!this.isModified('password')){
//         return next();
//     }
//     const salt = await bycrypt.genSalt(10)
//     this.password = await bycrypt.hash(this.password, salt)
//     next();
// })

// UserSchema.methods.comparePasswords = async function(password){
//     return bycrypt.compare(this.password, password);
// }


// const User = mongoose.model("User", UserSchema);
// export default User