// import { MyError } from "../middleware/ErrorHandler.js"
// import User from "../model/User.js"
// import jwt from 'jsonwebtoken'

// const JWT_SECRET = "JWT_SECRET"

// export const registerUser = async(req, res, next) =>{

//     const { username, email, password } = req.body

//     let existingUser = await User.findOne({ email })
//     if(existingUser){
//         next(
//             new MyError('User already Exists',400)
//         )
//     }

//     const newUser = new User({username, email, password})
//     newUser.save()

//     res.status(201)
//         .json({message: "User Created Successfully"})
// }

// export const loginUser = async(req, res, next) => {

//     try{
//         const { email, password } = req.body;
//         const _user = await User.findOne({email})

//         if(!_user || await _user.comparePasswords(password)){
//             next(
//                 new MyError('Invalid Credentials',401)
//             )
//         }

//         const token = jwt.sign({userId:_user._id}, JWT_SECRET, {expiresIn:'10h'});
//         res.status(200)
//             .send({
//                 message: 'login Successful',
//                 token: token
//             });
//     }catch(err){
//         console.log(`Exception - ${err}`)
//         next(
//             new MyError(`Exception ${err}`,500)
//         )
//     }

// }